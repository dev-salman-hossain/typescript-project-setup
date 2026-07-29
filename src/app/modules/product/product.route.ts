import express from 'express'
import validateSchema from '../../middleware/validateSchema.js'
import { createProductValidationSchema } from './product.validation.js'
import { productController } from './product.service.js'
const router=express.Router()
router.post(
    '/',
    validateSchema(createProductValidationSchema),
    
)
