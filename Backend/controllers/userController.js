const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../Models/usermodel")
const resgisterUser = asyncHandler(async (req, resp)=>{
        const {name, email, password, pic} = req.body;
        if(!name || !email|| !password){
            resp.status(400);
            throw new Error("Please Enter all the fields")
        }

        const userExist = await User.findOne({email})

        if(userExist)
        {
            resp.status(400);
            throw new Error("Please Enter all the fields")
        }

        const user = await User.create({
            name,
            email,
            password,
            pic
        })

        if(user)
        {
            resp.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            pic: user.pic,
            token: generateToken(user._id)
            })
        }
        else{
            resp.status(400);
            throw new Error("Failed to create a user")
        }
});


const authUser = asyncHandler(async (req,resp)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(user && ())
    {
        
    }
})


module.exports = {resgisterUser}
