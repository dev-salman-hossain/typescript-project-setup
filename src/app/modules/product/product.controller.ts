import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync.js";
import { productService } from "./product.service.js";
import sendResponse from "../../../utils/sendResponse.js";
import httpStatus from "http-status";

/**
 * Controller for creating a new product.
 * Returns created product details.
 */
const createProduct=catchAsync(
    async(req:Request, res:Response)=>{
        const user=req.body
        const result=await productService.createProduct(req.body, user.id)

        sendResponse(res,{
            success:true,
            statusCode:httpStatus.CREATED,
            message: "Product created successfully",
            data: result
        })
}
)

export const productController = {
  createProduct
}
