import "dotenv/config"

export default {

    port: process.env.PORT || 3000,
    mongodb_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/exampledb',
    JWT_secret: process.env.JWT_SECRET || 'SECRET'
}