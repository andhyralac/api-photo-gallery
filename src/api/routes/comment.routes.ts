import { Router } from 'express'

const router:Router = Router()


router.get('/', (req, res) => {
    res.json({
        msg: 'get user'
    })
})



export default router