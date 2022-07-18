import { Router } from 'express'
import { authHandler } from '../controller/auth.controller';

import { schemaValition } from '../middleware/validateResource';
import { AuthSchema } from '../schema/auth.schema';

const router:Router = Router()


router.post('/', schemaValition(AuthSchema), authHandler)



export default router