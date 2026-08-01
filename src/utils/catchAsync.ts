/**
 * Async boundary handler for Express middlewares
 */
import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync=(fn:RequestHandler)=>(req:Request, res:Response, next:NextFunction)=>{
    Promise.resolve(fn(req, res, next)).catch(next)
}
export default catchAsync



// long catchAsync function

// import { NextFunction, Request, Response } from "express";

// const catchAsync = (
//   fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
// ) => (req: Request, res: Response, next: NextFunction) =>
//   Promise.resolve(fn(req, res, next)).catch(next);

// export default catchAsync;