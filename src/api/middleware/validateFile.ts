import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { handleErrorResponse } from '../utils/handleError';



/**
 * middleware to validate file upload to server
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const validateFileUpload = (req:Request, res:Response, next:NextFunction) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        console.log(req.files);
        handleErrorResponse(res, 'THE IMAGE WAS NOT SENT IN THE REQUEST', 400)
        return
    }

    next()
}