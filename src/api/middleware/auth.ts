import { Request, Response, NextFunction } from 'express'
import { handleErrorResponse, handleHttpError } from '../utils/handleError';
import { verifyToken } from '../utils/jwt.utils';
import { findOneUser } from '../service/user.service';




export const checkAuth = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const token = req.header('x-token')
        if (!token) {
            handleErrorResponse(res, 'TOKEN DOES NOT COME IN THE REQUEST', 401)
            return
        }

        const tokenData = await verifyToken(token)
        if (!tokenData) {
            handleErrorResponse(res, 'INVALID TOKEN', 401)
            return
        }

        const user = await findOneUser({ _id: tokenData._id })
        if (!user) {
            console.log('Error: TOKEN DOES NOT BELONG TO ANY REGISTERED USER IN THE DATABASE');
            handleErrorResponse(res, 'INVALID TOKEN CREDENTIALS', 401)
            return
        }

        req.userId = tokenData._id
        next()

    } catch (error) {
        handleHttpError(res, error)
    }
}