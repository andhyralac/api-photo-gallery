import PhotoModel, { IPhoto } from '../models/photo.model'
import { UploadedFile } from 'express-fileupload';
import { destroyFileCloudinary, uploadFileCloudinary } from './cloudinary.service';





export const createPhoto = async (photo:IPhoto, image:UploadedFile): Promise<IPhoto> => {
    try {

        const { secure_url } = await uploadFileCloudinary(image)
        photo.img = secure_url

        return await PhotoModel.create(photo)

    } catch (error: any) {
        throw new Error(error)
    }
}

export const deletePhoto = async (idPhoto:string): Promise<boolean> => {
    try {

        const photo = await PhotoModel.findOne({_id:idPhoto})

        const { result } = await destroyFileCloudinary(photo!.img)
        if ( result !== 'ok' ) {
            return false
        }

        const photoUpdateStatus = await PhotoModel.findByIdAndUpdate({ _id:photo!._id }, { img: '', status: false }, { new: true})

        return (!photoUpdateStatus?.status) 
            ? true 
            : false

    } catch (error: any) {
        throw new Error(error)
    }
}












