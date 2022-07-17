import { Response } from "express"

/**
 * 
 * @param res 
 * @param error 
 */
export const handleHttpError = (res:Response, error:any) => {
    console.log('Error: ', error)
    res.status(500)
    res.json({ error: "SERVER_ERROR"})
}



/**
 * Handle error specify
 * @param res 
 * @param message 
 * @param code 
 */
export const handleErrorResponse = (res:Response, message:any, code:number) => {
    console.log('Error: ', message);
    res.status(code)
    res.json({ error: message })
}