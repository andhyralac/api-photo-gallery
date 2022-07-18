import { Handler, Request, Response } from "express";
import { handleErrorResponse, handleHttpError } from "../utils/handleError";
import { AuthType } from '../schema/auth.schema';
import { findOneUser } from "../service/user.service";
import { compare } from "../utils/handlePassword";
import { tokenSing } from "../utils/jwt.utils";
import { handleResponseData } from "../utils/handleReponse";




export const authHandler:Handler = async (
    req:Request<unknown, unknown, AuthType['body']>, 
    res:Response
    ) => {
    try {
        const { email, password } = req.body
        const user = await findOneUser({ email: email })
        if (!user) {
            handleErrorResponse(res, 'WRONG USER AND/OR PASSWORD', 404)
            return
        }

        const checkPassword = compare(password, user?.password)
        if (!checkPassword) {
            handleErrorResponse(res, 'WRONG USER AND/OR PASSWORD', 404)
            return
        }

        const tokenJwt = tokenSing(user)

        const data = {
            token: tokenJwt,
            user: user.full_name
        }

        handleResponseData(res, data, 200)

    } catch (error) {
        handleHttpError(res, error)
    }
}