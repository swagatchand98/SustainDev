import express from "express";
import userModel from "../../db/users";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
const signupRouter = express.Router();

export default signupRouter.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res
        .status(400)
        .json({ error: "username , email, and password are required" });
      return;
    }

    const existingUser = await userModel.findOne({
      email,
    });

    if (existingUser) {
      res.status(400).json({ error: "email already exists !" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "user created successfully" });
    return;
  } catch (e) {
    console.error("erorr:", e);
    res.status(500).json({ error: "server error" });
    return;
  }
});
