import userModel from "../models/userModel.js";
import { hashPassword,comparePassword } from "../helper/authHelper.js";


// To create a new user
export const signUpController = async (req,res) => {
    try {

        const {firstname , 
               lastname , 
               age , 
               gender , 
               email , 
               password , 
               confirmpassword
        } = req.body;

        if(!firstname || !lastname || !age || !gender || !email || !password ){
            return res.send({
                message : "please enter complete information"
            })
        }

        const existedUser = await userModel.findOne({email : email});

        if(existedUser){
            return res.status(200).send({
                success : true,
                message : "user already exist , please Login"
            })
        }

       
        const hashedPassword = await hashPassword(password);

        const newUser = await userModel.create({firstname,lastname,age,email,gender,password : hashedPassword});

        return res.status(200).send({
            success : true,
            message : "new user created",
            newUser
        })
        
    } catch (error) {

        console.log(error);
        return res.status(400).send({
             message : "error in registering user",
             success : false,
             error
        })
    }
}


// to sign-in
export const signInController = async (req,res) => {
    try {
        const {email , password} = req.body;
        
        if(!email || !password){
            return res.send({
                message : "please enter complete information"
            })
        }

        const existedUser = await userModel.findOne({email : email});
        if(!existedUser){
            return res.status(400).send({
                success : false,
                message : "user doesn't exist , sign-up"
            })
        }

       const checkPassword = await comparePassword(password,existedUser.password);

       if(!checkPassword){
          return res.status(400).send({
             success : false,
             message : "password don't match"
          })
       }

       return res.status(200).send({
         success : true,
         message : "successful login",
         existedUser
       })


        
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success : false,
            message : "failed attempt to login",
            error
        })
    }
}

