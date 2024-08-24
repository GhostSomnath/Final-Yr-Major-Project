import express from "express";
import dotenv from "dotenv";
import  connectDB  from "./Config/DB.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/User.route.js";

const app = express();


// Dotenv Congiguration
dotenv.config({
    path : "./.env"
});


// Database Connection
connectDB();

// Cors Config
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials : true
}))

// Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());


// APIs
app.use('/api/user',userRoutes);


// Server Listening Endpoint
app.listen(process.env.PORT , (req, res)=>{
    console.log(`Server Running at Port ${process.env.PORT}`)
});