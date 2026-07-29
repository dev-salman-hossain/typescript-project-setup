import { prisma } from "../../../lib/prisma.js";
import { TProduct } from "./product.interface.js";

const createProduct = async (payload: TProduct, userId: string) => {
  const result = await prisma.product.create({
    data: {
      ...payload,
      createdBy: userId
    }
  });
  return result;
};

export const productService = {
  createProduct
};
