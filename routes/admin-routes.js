import express from "express";


const router = express.Router();


router.get("/welcome",(req,res)=>{
    res.json({
        messsage:"Welcome to admin page."
    })
})

export default router;