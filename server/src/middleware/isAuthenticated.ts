import { NextFunction, Request, Response } from "express";
import express from "express";
import jwt from "jsonwebtoken";
import config from "../config/env"
import userModel from "../db/users";
import mongoose, { ObjectId } from "mongoose";

const app = express();
app.use(express.json());

// interface CustomRequest extends Request{
//     username?: String,
//     email?: String,
//     createdAt?: Date,
// }

interface UserPayload {
    
    username: string;
    email: string;
    createdAt: Date;
}

declare global{
    namespace Express {
        interface Request {
            user?: UserPayload;
            userId?: mongoose.Types.ObjectId;
        }
    }
}

const isAuthenticated = async( req : Request , res : Response , next : NextFunction ) => {
    
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
    
        const decoded = await userModel.findById(userId);
    
        if(decoded){
            
            req.user = decoded;
            req.userId = decoded._id;
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