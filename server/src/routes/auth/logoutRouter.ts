import express from "express";

const logoutRouter = express.Router();

logoutRouter.post('/', async(req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message : "logged out successfully !"});
})

export default logoutRouter;