import { Router } from "express";
import { signInController, signUpController } from "../../../controller/authController.js";
const authRouter = Router();

// To sign-up 
authRouter.post('/sign-up' , signUpController);

// To sign-in
authRouter.get('/sign-in' , signInController);




export default authRouter;