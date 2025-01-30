import express from 'express';
import path from 'path';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import userModel from '../db.js';

const app = express();
const authRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

authRouter.get('/signup', async (req, res) => {

    res.render('login.ejs')
})

authRouter.get('/signin', (req, res) => {

    res.render('login.ejs')
})

authRouter.post('/signup', async(req, res) => {

    const { username , email , password } = req.body;

    await mongoose.create({

        username,
        email,
        password
    })

    res.send({
        message : "signed up sucsessfully"
    })

    res.redirect('signin');

})

authRouter.post('/signin', async (req, res) => {

    const { email, password } = req.body;
    
    const user = userModel.findOne({

        email : email,
        password : password
    })

    if(user){

        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRET);

        res.send({
            token
        })
    }else {

        res.send({
            message : "Wrong Credidentials"
        })
    }

    
})

export default authRouter;