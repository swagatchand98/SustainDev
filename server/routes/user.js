import express from 'express';
import path from 'path';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';


const app = express();
const userRouter = express.Router();

const JWT_SECRET = "aR@nd0mL0ngS3cretKey8270527918!";

import  userMiddleware  from '../middleware/user.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

userRouter.get('/home',userMiddleware,  (req, res) => {

    const userId = req.userId;

    const user = userModel.findone({
        _id : userId
    })

    const username = user.username;
    res.render('after-login.ejs', {username : username})
} )

userRouter.get('/booking1',userMiddleware, (req, res) => {

    res.render('booking1.ejs')
} )

userRouter.post('/booking1',userMiddleware, async(req, res) => {


    const {plastic , paper, metal, glass, eWaste} = req.body;

    await mongoose.create({
        trash : {

            plastic,
            paper,
            metal,
            glass,
            eWaste
        }
    })

    res.send({
        message : "Trash detailed submitted"
    })

    res.redirect('/booking2')
} )

userRouter.get('/booking2',userMiddleware, (req, res) => {

    res.render("booking2.ejs")

} )

userRouter.post('/booking2',userMiddleware, (req, res) => {

} )

export default userRouter;
