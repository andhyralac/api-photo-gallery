import { Router } from 'express'

const router:Router = Router()


router.get('/', (req, res) => {
    res.json({
        msg: 'get photo'
    })
})



export default router