import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register
const registerUser = async(req,res)=>{
    try {
        const {username,email,password,role}  = req.body;

        const ExistingUser = await User.findOne({$or:[{username},{email}]})

        if(ExistingUser){
            return res.status(400).json({success:false,message:"User already exists. Please try different username"})
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)

        //create new user
        const newlyCreatedUser = new User({
            username,
            email,
            password:hashedPassword,
            role:role || 'user'
        })
        await newlyCreatedUser.save()

        if(newlyCreatedUser){
            res.status(201).json({success:true,message:"User registered successfully!"})
        }
        else{
            res.status(400).json({success:false,message:"Unable to register user"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Something went wrong"}) 
    }
}


//login 
const loginUser = async(req,res)=>{
    try {

    const{username,password} = req.body;

    //find if the current user is exists in database or not
    const user = await User.findOne({username});

    if(!user){
        return res.status(400).json({success:false,message:"Invalid username or password"})
    }

    //if password is correct or not
    const isPasswordMatch = await bcrypt.compare(password,user.password);

    if(!isPasswordMatch){
        return res.status(400).json({success:false,message:"Invalid username or password"})
    }

    //create user token

    const accessToken = jwt.sign({
        userId:user._id,
        username:user.username,
        role:user.role
    })



      
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Something went wrong"})    
    
    }
}

export {registerUser,loginUser}