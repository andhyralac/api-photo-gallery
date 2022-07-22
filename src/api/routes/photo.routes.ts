import { Router } from 'express'
import { createPhotoHandler, deletePhotoHandler } from '../controller/photo.controller'
import { checkAuth } from '../middleware/auth'
import { validateFileExtension, validateFileUpload } from '../middleware/validateFile'
import { schemaValition } from '../middleware/validateResource'
import { CreatePhotoSchema } from '../schema/photo.schema'
import config from '../../config/default'

const router:Router = Router()


router.post('/', [
    checkAuth,
    validateFileUpload,
    validateFileExtension(config.ALLOWED_IMAGE_EXTENSIONS),
    schemaValition(CreatePhotoSchema),
], createPhotoHandler)


router.delete('/:id', deletePhotoHandler)





export default router