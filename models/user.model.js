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
  }
 });

// UserSchema.pre('save', function(next) {                                                                                                                                        
//   this.password = bcrypt.hashSync(this.password, 10);                                                                                                                                                                       
//   next();                                                                                                                                     
// }); 

UserSchema.plugin(uniqueValidator);
 
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


var User = mongoose.model('User', UserSchema);
module.exports = User;