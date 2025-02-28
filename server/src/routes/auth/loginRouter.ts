import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../../db/users";
import config from "../../config/env"

const app = express();
const loginRouter = express.Router();
app.use(express.json());

export default loginRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "email and passwod are required" });
      return;
    }

    const user = await userModel.findOne({ email });

    if (user) {
      const authenticatedUser = await bcrypt.compare(password, user.password);

      if (authenticatedUser) {
        const token = jwt.sign(user._id.toString(), config.JWT_secret);
        res.send({ token });
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
    console.error('error :', e);
    res.status(500).json({ error : "internal server error !"});
    process.exit(1);
  }
});
