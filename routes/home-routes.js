import express from "exoress";

const router = express.Router()

router.get("/welcome",(req,res)=>{
    res.json({
        message:"Welcome to Home route"
    })
})

export default router