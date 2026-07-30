import { prisma } from '../../../lib/prisma.js';
import { TOrder } from './order.interface.js';

const createOrder = async (userId: string, payload: Omit<TOrder, 'userId'>) => {
  const result = await prisma.$transaction(async (tx) => {
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
