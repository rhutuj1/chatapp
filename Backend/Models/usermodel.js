const mongoose = require("mongoose")

const usermodel = mongoose.Schema(
{
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password:{type: String, required: true},
    profilepicture: {type: String, default: "https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM="}

},
{
    timestamps: true
}
)

const User = mongoose.model("User", usermodel);

module.exports = User;
