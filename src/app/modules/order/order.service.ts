import { prisma } from '../../../lib/prisma.js';
import { TOrder } from './order.interface.js';

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

const createOrder = async (userId: string, payload: Omit<TOrder, 'userId'>) => {
  const result = await prisma.$transaction(async (tx) => {
    // Verify and decrement stock for each item
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

export const orderService = {
  createOrder
};
