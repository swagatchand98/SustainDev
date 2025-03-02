import express, { Request, Response } from "express";
import isAuthenticated from "../../middleware/isAuthenticated";

const userRouter = express.Router();

export default userRouter.get('/', isAuthenticated, async( req: Request, res: Response ) => {

    try{
        if(!req.user){
            res.status(401).json({ error : "user not found !"})
            return;
        }

        const username = req.user?.username;
        const email = req.user?.email;
        const createdAt = req.user?.createdAt;
    
        res.status(200).json({ username, email, createdAt });
        return;

    } catch(e){
        console.error("error :", e);
        res.status(500).json({ error : "internal server error !"})
        return;
    }
})