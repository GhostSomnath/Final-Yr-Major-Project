import express from "express";
import { userRegister, userLogin, userLogout } from "../Controllers/User.controller.js";
const router = express.Router();


// User Routes 
router.route("/login").post(userLogin);
router.route("/register").post(userRegister);
router.route("/logout").get(userLogout);

export default router;