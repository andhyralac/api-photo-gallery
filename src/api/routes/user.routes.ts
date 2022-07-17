import { Router } from 'express'
import { createUserHandler } from '../controller/user.controller'
import { schemaValition } from '../middleware/validateResource';
import { CreateUserSchema } from '../schema/user.schema';

const router:Router = Router()


router.post('/', schemaValition(CreateUserSchema), createUserHandler)



export default router