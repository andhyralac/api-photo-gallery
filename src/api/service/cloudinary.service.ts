import { UploadApiResponse, v2 as cloudinary } from 'cloudinary'
import config from '../../config/default'
import { UploadedFile } from 'express-fileupload';

cloudinary.config(config.CLOUDINARY_URL,{
    secure: true
})




export const uploadFileCloudinary = async (file:UploadedFile):Promise<UploadApiResponse> => {
    try {

        const { tempFilePath } = file
        return await cloudinary.uploader.upload( tempFilePath )

    } catch ( error:any ) {
        throw new Error(error)
    }
}


export const destroyFileCloudinary = async (imagePath:string) => {
    try {
        const fileNameArray = imagePath.split('/')
        const fileName = fileNameArray[ fileNameArray.length - 1 ]
        const [ public_id ] = fileName.split('.')
        return await cloudinary.uploader.destroy( public_id )

    } catch ( error:any ) {
        throw new Error(error)
    }
}