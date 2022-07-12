import bcryptjs from 'bcryptjs'

/**
 * Encryp textplain
 * @param {*} passwordPlain 
 * @returns 
 */
export const encrypt = (passwordPlain:string) => {
    const salt = bcryptjs.genSaltSync()
    return bcryptjs.hashSync(passwordPlain, salt)
}




