import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../../db/users";
import config from "../../config/env";

const loginRouter = express.Router();

export default loginRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "email and password are required" });
      return;
    }

    const user = await userModel.findOne({ email: email }).select("+password"); //we need to to select the password (defalut the the select is false for password in userSchema)

    if (user) {
      
      const authenticatedUser = await bcrypt.compare(password, user.password);

      if (authenticatedUser) {
        const token = jwt.sign(user._id.toString(), config.JWT_secret);
        
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict'
        })

        res.status(200).json({
          message : "login successful!"
        });
        
        return;

      } else {
        res.status(402).json({ error: "wrong password !" });
        return;
      }
    } else {
      res.status(401).json({ error: "user not found !" });
      return;
    }
  } catch (e) {
    console.error("error :", e);
    res.status(500).json({ error: "internal server error !" });
  }
});
