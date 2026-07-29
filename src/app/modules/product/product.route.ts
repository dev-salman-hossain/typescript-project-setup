import express from 'express'
import validateSchema from '../../middleware/validateSchema.js'
import { createProductValidationSchema } from './product.validation.js'
import { productController } from './product.controller.js'
const router=express.Router()
router.post(
    '/',
    validateSchema(createProductValidationSchema),
    productController.createProduct
)
export const ProductRoutes = router;
