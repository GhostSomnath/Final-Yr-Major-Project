import brcypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../Models/User.model.js";

dotenv.config({
    path : './.env'
});


export const userRegister = async (req,res) => {
    try {

        // Checking All fields
        const {name, email, password} = req.body;
        if(!name || !email || !password ) {
            return res.status(400).json({
                msg: "Please enter all the fields",
                success : false
            });
        }

        // Checking Existing User
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                msg: "Email already exists",
                success : false
            })
        }
        
        // Hashing password with 10 salt rounds
        const hashedPassword = await brcypt.hash(password, 10);

        // Creating User and saving to DB
        await User.create({
            name,
            email,
            password : hashedPassword
        })
        return req.status(201).json({
            msg : "User Registered Successfully",
            success : true
        })
    } catch (error) {
        console.log(`Registration Error : ${error}`);
    }
}

export const userLogin = async (req, res) => {
    try {
        const {email , password} = req.body;

        // Checking Required Fields
        if(!email || !password) {
            return res.status(401).json({
                msg : "Please enter both email and password",
                success : false
            })
        }

        // Find Existing User
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                msg : "User Not Existed",
                success : false
            })
        }

        // Password Matching
        const isMatched = await brcypt.compare(password, user.password);
        if(!isMatched){
            return res.status(401).json({
                msg : "Wrong Credentials",
                success : false
            })
        }

        // Generating tokenId for every user
        const tokenId = {
            id : user._id
        }

        // Generating Token for User
        const token = await jwt.sign(tokenId, process.env.JWT_SECRET);
        return res.status(201).cookie("token", token).json({
            msg : `Welcome Back ${user.name}`,
            success : true
        })
    } catch (error) {
        console.log(`Login Error : ${error}`);
    }
}

// Logout User
export const userLogout = async(req,res) => {
    try {
        return res.status(201).cookie("token", "", {expiresIn:new Date(Date.now)}).json({
            message:`User Logged Out`,
            success : true
        })
    } catch (error) {
        console.log(`Logout Error : ${error}`);
    }
}