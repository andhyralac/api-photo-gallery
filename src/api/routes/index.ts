import { Router } from 'express'
const routes:Router = Router()

import routesUser from './user.routes'
import routesPhoto from './photo.routes'
import routesComment from './comment.routes'
import routesAuth from './auth.routes'

routes.use('/users', routesUser)
routes.use('/photos', routesPhoto)
routes.use('/comments', routesComment)
routes.use('/auth', routesAuth)

export default routes