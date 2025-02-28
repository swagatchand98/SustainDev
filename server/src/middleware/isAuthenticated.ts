import { NextFunction, Request, Response } from "express";
import express from "express";
import jwt from "jsonwebtoken";
import config from "../config/env"
import userModel from "../db/users";

const app = express();
app.use(express.json());

interface CustomRequest extends Request{
    username: String,
    email: String,
    createdAt: Date,
}

const isAuthenticated = async( req : CustomRequest , res : Response , next : NextFunction ) => {
    
    try{
        const { token } = req.cookies;

        if(!token){
            res.status(401).json({ error : "Unauthorized !"})
            return;
        }
    
        const userId = jwt.verify(token, config.JWT_secret);
        
        if(!userId){
            res.status(401).json({ error : "Invalid token"})
            return;
        }
    
        const user = await userModel.findById({userId});
    
        if(user){
            req.username = user.username;
            req.email = user.email;
            req.createdAt = user.createdAt;

            res.json({ message: "Access granted!"});
            next()
        }else{
            res.status(401).json({ error: "user not found"});
        }
    }

    catch(e) {
        console.log('error:', e);
        res.status(500).json({ error : "internal server error"})
    }
}

export default isAuthenticated;