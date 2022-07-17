import { Response } from "express";


/**
 * Handle response data
 * @param res 
 * @param data 
 * @param code 
 */
export const handleResponseData = (res:Response, data: any, code:number = 200) => {
    res.status(code)
    res.send({
        data: data
    })
}