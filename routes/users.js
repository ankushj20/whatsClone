const  mongoose = require("mongoose")
const plm = require("passport-local-mongoose")


mongoose.connect('mongodb://127.0.0.1:27017/whatsClone',)
const userSchema = mongoose.Schema({
  username : {
    type : String,
    required : [true, "username is required for creating user"],
    unique: [true, 'Username field must be unique']
  },
  
  contact : {
    type: String,
  },

  img:{
    type: String,
    default: "https://i.pinimg.com/564x/c5/07/8e/c5078ec7b5679976947d90e4a19e1bbb.jpg"
  },

  socketId: {
    type: String
  },

})

userSchema.plugin(plm)
module.exports = mongoose.model('user', userSchema)