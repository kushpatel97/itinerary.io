const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt'); 
const uniqueValidator = require('mongoose-unique-validator');                                                                                                                                         



const UserSchema = new Schema({
  first_name: {
   type: String,
   trim: true,  
   required: true,
  },
  last_name: {
    type: String,
    trim: true,  
    required: true,
   },
  email: {
   type: String,
   trim: true,
   unique: true,
   required: true
  },
  password: {
   type: String,
   trim: true,
   required: true
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
 });

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);;