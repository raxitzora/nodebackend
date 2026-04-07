const isAdminUser = (req,res,next)=>{
    if(req.user.role!=="admin"){
        return res.status(403).message({success:false,message:"Access denined Admin rights required"})
    }
}

next()

export default isAdminUser;