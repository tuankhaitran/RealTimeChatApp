import express from 'express'
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import cookieParser from "cookie-parser"
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express()
dotenv.config()

const PORT =process.env.PORT || 5000
// app.get("/",(req,res)=>{
//     // root route localhost:5000/
//     res.send("Hello word 2")
// })

app.use(express.json())// to parse the incoming request with JSON payload 
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server running on ${PORT}`)
})