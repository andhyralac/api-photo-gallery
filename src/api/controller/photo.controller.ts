import { Handler, Request, Response } from 'express'
import fileUpload from 'express-fileupload'
import { Types } from 'mongoose'
import { IPhoto } from '../models/photo.model'
import { CreatePhotoType } from '../schema/photo.schema'
import { createPhoto, deletePhoto } from '../service/photo.service'
import { handleHttpError, handleErrorResponse } from '../utils/handleError';
import { handleResponseData } from '../utils/handleReponse';




export const createPhotoHandler:Handler = async (
    req:Request<unknown, unknown, CreatePhotoType['body']>, 
    res:Response
    ) => {
    try {

        const image = req.files!.file as fileUpload.UploadedFile
        const photo:IPhoto = {
            description: req.body.description,
            img: '',
            user: new Types.ObjectId(req.userId)
        }


        const createdPhoto:IPhoto = await createPhoto(photo, image)

        if (!createdPhoto) {
            handleErrorResponse(res, 'could not register user', 400)
            return
        }

        handleResponseData(res, { msg: 'THE PHOTO WAS CREATED SUCCESSFULLY' }, 201)

    } catch (error) {
        return handleHttpError(res, error)
    }
}






export const deletePhotoHandler:Handler = async (req:Request, res:Response) => {
    try {
        const { id } = req.params

        const result = await deletePhoto(id)

        if (!result) {
            handleErrorResponse(res, 'PHOTO CANNOT BE REMOVED', 400)
            return
        }

        handleResponseData(res, {msg:'PHOTO WAS DELETED'}, 200)

    } catch ( error:any ) {
        return handleHttpError(res, error)
    }
}