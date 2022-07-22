export default {
    PORT: process.env.PORT,
    DEVELOPMENT: process.env.DEVELOPMENT || '',
    MONGO_URI: process.env.MONGO_URI || '',
    JWT_SECRET: process.env.JWT_SECRET || '',
    ALLOWED_IMAGE_EXTENSIONS: ['jpg', 'jpeg', 'png', 'gif'],
    CLOUDINARY_URL: process.env.CLOUDINARY_URL || ''
}