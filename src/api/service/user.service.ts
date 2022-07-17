import UserModel, { IUser } from "../models/user.model";
import { encrypt } from "../utils/handlePassword";



export const createUser = async (user:IUser): Promise<IUser> => {
    try {
        const passwordHash = encrypt(user.password)
        user.password = passwordHash

        const createdUser:IUser = await UserModel.create(user)
        return createdUser

    } catch (error: any) {
        throw new Error(error)
    }
}