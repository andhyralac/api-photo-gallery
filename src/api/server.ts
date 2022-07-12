import dotenv from 'dotenv'
dotenv.config()
import express  from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

import config from '../config/default'
import connectDB from './database/connection'
import routes from './routes/index'

// App
const app = express()

// Setting
app.set('port', config.PORT || 4100)

// Middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
if (config.DEVELOPMENT == 'DEVELOPMENT') {
    app.use(morgan('dev'))
}

// Setting Routes
app.use('/api/v1/', routes)

// Connection database
connectDB()

export default app