import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"
export const signup = async (req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender}=req.body
        if(password !==confirmPassword){
            return res.status(400).json({error:"Password dont match"})
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error:"Username already exists"})
        }
        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)

        const boyProfilePic = `avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `avatar.iran.liara.run/public/girl?username=${username}`
        const newUser= new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic:gender==="male"?boyProfilePic:girlProfilePic
        })
        if(newUser){
            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save()
            res.status(200).json(newUser)
        }else{
            res.status(422).json({error:"Invalid user data"})
        }
    }catch(error){
        console.log("Error: ", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
export const login = async (req,res)=>{
    try{
        const {username,password}=req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"})
        }
        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        })
    }
    catch(error){
        console.log("Error: ", error.message)
        res.status(500).json({error:"Login Error"})
    }
}
export const logout = (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({
            message:"Logout succesfully"
        })
    }
    catch(error){
        console.log("Error: ", error.message)
        res.status(500).json({error:"Logout Error"})
    }
}