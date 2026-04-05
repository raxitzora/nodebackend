import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"User name is required"],
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema);
export default User;