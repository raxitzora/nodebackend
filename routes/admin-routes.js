import express from "express";
import authMiddleware from "../middleware/auth-middleware";


const router = express.Router();


router.get("/welcome",authMiddleware,(req,res)=>{
    res.json({
        messsage:"Welcome to admin page."
    })
})

export default router;