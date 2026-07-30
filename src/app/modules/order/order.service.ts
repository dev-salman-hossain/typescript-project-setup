import { prisma } from '../../../lib/prisma.js';
import { TOrder } from './order.interface.js';
import { TOrderStatus } from './order.constant.js';

// Status helper
const isCancelled = (status: TOrderStatus) => status === 'cancelled';

const verifyStock = async (tx: any, productId: string, quantity: number) => {
  const product = await tx.product.findUnique({ where: { id: productId } });
  if (!product || product.stock < quantity) {
    throw new Error('Insufficient stock or product not found');
  }
  await tx.product.update({
    where: { id: productId },
    data: { stock: { decrement: quantity } }
  });
};

const createOrder = async (userId: string, payload: Omit<TOrder, 'userId'>): Promise<any> => {
  const result = await prisma.$transaction(async (tx) => {
    for (const item of payload.items) {
      await verifyStock(tx, item.productId, item.quantity);
    }

    const order = await tx.order.create({
      data: {
        userId,
        totalPrice: payload.totalPrice,
        items: {
          create: payload.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: {
        items: true
      }
    });
    return order;
  });
  return result;
};

const getOrdersByUserId = async (userId: string): Promise<any[]> => {
  return await prisma.order.findMany({
    where: { userId },
    include: { items: true }
  });
};

const updateOrderStatus = async (orderId: string, status: TOrderStatus): Promise<any> => {
  if (isCancelled(status)) {
    // Perform cancellation tasks here
  }
  return await prisma.order.update({
    where: { id: orderId },
    data: { status }
  });
};

const getSingleOrder = async (orderId: string): Promise<any> => {
  return await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: true }
  });
};

export const orderService = {
  createOrder,
  getOrdersByUserId,
  updateOrderStatus,
  getSingleOrder
};
