import jwt from 'jsonwebtoken'

import config from '../../config/default'
import { IUser } from '../models/user.model'

/**
 * function to make the token
 * @param id 
 * @param email
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



