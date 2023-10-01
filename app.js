import express from 'express';
import mongoose from "mongoose"
import morgan from 'morgan';
import userRouter from "./routes/User.js";

//server
const server = express();

//port
const PORT = 3003;

//middlewares
server.use(morgan('combined'))
server.use(express.json());

//routes
server.use('/users', userRouter);

main().catch((error => console.log(error)));

async function main() {
    await mongoose.connect('mongodb+srv://haider:Haiderali_560@cluster0.otwulzw.mongodb.net/database?retryWrites=true&w=majority');
    console.log('connected to mongodb atlas through mongoose');
}

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})