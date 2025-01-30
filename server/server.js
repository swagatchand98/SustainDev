import express from "express"
import cors from 'cors'
import mongoose from "mongoose"
import 'dotenv/config'

const app = express()

import  authRouter  from "./routes/auth.js"
import  homeRouter  from "./routes/home.js"
import  userRouter  from "./routes/user.js"

app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/', homeRouter)
app.use('/user', userRouter)

await mongoose.connect("mongo_URI")
app.listen(3000);