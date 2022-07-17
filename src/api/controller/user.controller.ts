import { Handler, Request, Response } from 'express';

import { createUser } from '../service/user.service';
import { handleHttpError } from '../utils/handleError';
import { CreateUserType } from '../schema/user.schema';
import { handleResponseData } from '../utils/handleReponse';
import { tokenSing } from '../utils/jwt.utils';
import { IUser } from '../models/user.model';


export const createUserHandler:Handler = async (
    req:Request<unknown, unknown, CreateUserType['body']>, 
    res:Response
    ) => {
    try {
        const createdUser:IUser = await createUser(req.body)
        const token = tokenSing(createdUser)

        handleResponseData(res, token, 201)
    } catch (error) {
        return handleHttpError(res, error)
    }
}