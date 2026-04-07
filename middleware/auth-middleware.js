import jwt from "jsonwebtoken";
const authMiddleware = (req,res,next) =>{

    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({success:false,message:"Access Denied. No token provided, Please login to continue."})
    }

    try {
        const decodedTokenInfo = jwt.verify(token,process.env.JWT_SECRET_KEY) 
        
        req.userInfo = decodedTokenInfo
    } catch (error) {
        return res.status(500).json({success:false,message:"Access Denied. No token provided, Please login to continue."})
        
    }
    next()
}

export default authMiddleware;