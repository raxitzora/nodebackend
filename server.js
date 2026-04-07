import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB from "./database/db.js";
import bookRoutes from "./routes/book-routes.js";
import authRoutes from "./routes/auth-routes.js"
import homeRoutes from "./routes/home-routes.js"

const app = express();
const port = 3000;


app.use(express.json());



app.use("/api/books",bookRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/home",homeRoutes);

connectDB()

app.get("/",(req,res)=>{
    res.json({message:"Welcome to home"})
})






app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})