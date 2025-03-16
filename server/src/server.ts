import express from "express"
import config from "./config/env"
import cors from "cors"
import cookieParser from "cookie-parser";

import connectDB from "./config/db";
import signupRouter from "./routes/auth/signupRouter"
import loginRouter from "./routes/auth/loginRouter";
import userRouter from "./routes/user/userRouter";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);

const startServer = async() => {
    try{
        await connectDB();
        connectDB();
        app.listen(config.port, () => {
            console.log(`server running on ${config.port} port`)
        });
    } catch(e) {
        console.error("failed to start server", e);
        process.exit(1);
    }
};

startServer();