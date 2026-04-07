const authMiddleware = (req,res,next) =>{
    console.log("Auth middle ware is called");
    next()
}

export default authMiddleware;