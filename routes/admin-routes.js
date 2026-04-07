import express from "express";
import authMiddleware from "../middleware/auth-middleware";
import adminMiddleware from "../middleware/admin-middleware";


const router = express.Router();


router.get("/welcome",authMiddleware,adminMiddleware,(req,res)=>{
    res.json({
        messsage:"Welcome to admin page."
    })
})

export default router;