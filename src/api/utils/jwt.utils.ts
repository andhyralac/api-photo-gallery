import jwt, { JsonWebTokenError, NotBeforeError, TokenExpiredError, verify } from 'jsonwebtoken'

import config from '../../config/default'
import { IUser } from '../models/user.model'

/**
 * function to make the token
 * @params user
 * @returns token 
 */
export const tokenSing = (user:IUser):string  => {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email
        },
        config.JWT_SECRET,
        {
            expiresIn: '5h'
        }
    )
}



interface IPaylod  {
    _id: string;
    email: string;
    iat: number;
    exp: number;
}



/**
 * token verification function
 * @param token
 * @returns 
 */
export const verifyToken = async (token:string):Promise<IPaylod | null> => {
    try {
        return jwt.verify(token, config.JWT_SECRET) as IPaylod
    } catch ( error ) {
        console.log(error)
        return null
    }
}