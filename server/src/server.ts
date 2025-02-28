import express from "express"
import config from "./config/env"
import cors from "cors"

import connectDB from "./config/db";
import signupRouter from "./routes/auth/signupRouter"
import loginRouter from "./routes/auth/loginRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/signup', signupRouter);
app.use('/login', loginRouter);

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