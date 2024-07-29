import User from "../models/user.model.js"

export const getUsersForSidebar = async (req,res)=>{
    try{
        const logginUserId = req.user._id
        const allUser = await User.find({_id:{$ne: logginUserId}}).select("-password")
        res.status(200).json(allUser)
    }
    catch(error){
        console.log("Error in getUsersForSidebar ", error.message)
        res.status(500).json({error:"Internal sever error"})
    }
}
