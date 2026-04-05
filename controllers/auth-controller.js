import User from "../models/User.js";

//register
const registerUser = async(req,res)=>{
    try {
    



        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Something went wrong"}) 
    }

}


//login 
const loginUser = async(req,res)=>{
    try {

        const {username,email,password} = req.body;

        if(!username || !email || !password){
            return res.status(500).json({message:"fields are required"})
        }

        const NotRegistered = await User.find({username,email,password})

        if(NotRegistered){
            return res.status(500).json({message:"User us not registered"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Something went wrong"})    
    
    }
}

export {registerUser,loginUser}