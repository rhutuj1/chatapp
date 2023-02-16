const mongoose = require("mongoose")

const Messagemodel = mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    content: {type: String, trim: true },
    chat:{type: mongoose.Schema.Types.ObjectId, ref:"Chatmodel"}

},
{
    timestamps: true
}
)

const Message = mongoose.model("Message", Messagemodel);

module.exports = Message;