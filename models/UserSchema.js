const mongoose = require("mongoose");
var valid = require("validator");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  Email: {
    type: String,
    required: true,
    validate: {
      validator: (val) => {
        return valid.isEmail(val);
      },
      message: "invalid email !",
    },
  },
  Password: {
    type: String,
    required: true,
  },
  
  Name: {
    type: String,
    required: true,
  },
  ProfilePicture: {
    type: String,
    default: "default_profile.jpg" // You can set a default profile picture
  },
  Location: {
    city: String,
    country: String,
  },
  Verified: {
    type: Boolean,
    default: false,
  },
  Role: {
    type: String,
    default: "User",
  },
  Tutorial : {
    type : Boolean ,
    default : true,
  },
  Library: {
    Music:[{
      name: String,
      artist: String ,
      image: String ,

    }],
    Books:[{
      name: String,
      writer: String ,
      image: String ,
    }],
    Games:[{
      name: String,
      company: String,
      image: String ,
    }],
    Movies:[{
      name: String,
      preview: String ,
      image: String ,
    }]
  }
  ,
  Followers : [{
    
  }]
}, {
  timestamps: true 
});



module.exports = mongoose.model("User", UserSchema);
