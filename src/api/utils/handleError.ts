import { Response } from "express"

export const handleHttpError = (res:Response, error:any) => {
    console.log('Error: ', error)
    res.status(500);
    res.send({ error: "SERVER_ERROR"})
}



/**
 * Handle error specify
 * @param res 
 * @param message 
 * @param code 
 */
export const handleErrorResponse = (res:Response, message:string, code:number) => {
    console.log('Error: ', message);
    res.status(code)
    res.send({ error: message })
}