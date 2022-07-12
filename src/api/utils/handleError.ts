import { Response } from "express"

export const handleHttpError = (res:Response, error:any) => {
    console.log('Error: ', error)
    res.status(500);
    res.send({ error: "SERVER_ERROR"})
}