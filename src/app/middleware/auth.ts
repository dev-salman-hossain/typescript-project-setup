import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import env from "../../config/env.js"

/**
 * Helper utility to verify token roles.
 */
const checkUserRole = (decodedRole: string, requiredRoles: string[]) => {
  return requiredRoles.includes(decodedRole);
};

/**
 * Authentication and authorization middleware.
 * Verifies JWT token and checks user roles.
 */
const auth =(...requiredRoles:string[])=>{
    return async(req:Request, res:Response, next:NextFunction)=>{
        try {
            const token=req.headers.authorization
            if(!token){
                throw new Error('you are not authorized')
            }
            const actualToken=token.startsWith('Bearer ') ? token.split(' ')[1]:token

            const decoded=jwt.verify(
            actualToken!, env.jwt_secret!
            ) as JwtPayload

            req.user=decoded

            if(requiredRoles.length && !checkUserRole(decoded.role, requiredRoles)){
                throw new Error('forbidden access')
            }
            next()

        } catch (error) {
            next(error)
        }
    }
}
