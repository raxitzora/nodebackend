import express from "exoress";
import authMiddleware from "../middleware/auth-middleware.js";

const router = express.Router()

router.get("/welcome",authMiddleware,(req,res)=>{
    res.json({
        message:"Welcome to Home route"
    })
})

export default router