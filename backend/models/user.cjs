const mongoose = require("mongoose");
 const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
     
    },
    number:{
        type:Number,
        required:true,
        trim:true,
    },
    subject:{
        type:String,
        required:true,
        trim:true,
    },
    submittedAt: {
        type: Date,
        default: Date.now
      }
 })
 const User = mongoose.model('User', userSchema);

module.exports = User;