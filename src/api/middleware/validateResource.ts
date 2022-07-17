import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from 'zod'
import { handleHttpError, handleErrorResponse } from '../utils/handleError';


export const schemaValition =
( schema: AnyZodObject ) => 
( req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        })
        next()
    } catch (error) {
        if (error instanceof ZodError) {
            return handleErrorResponse(res, 
                error.issues.map(issue => ({ 
                    path: issue.path, 
                    message: issue.message
                })), 400)
        }
        return handleHttpError(res, error)
    }
}