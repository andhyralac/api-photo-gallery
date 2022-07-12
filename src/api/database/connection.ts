import mongoose from 'mongoose'

import config from '../../config/default'

const connectDB = async () => {

    try {
        await mongoose.connect(config.MONGO_URI);
        console.log('**** SUCCESSFUL CONNECTION ****');
    } catch (error) {
        console.log('**** CONNECTION ERROR ****');
    }
}

export default connectDB