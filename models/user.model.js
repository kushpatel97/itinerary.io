const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');                                                                                                                                          



const UserSchema = new Schema({
  first_name: {
   type: String,
   trim: true,
  //  default: '',  
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
  //  default: '', 
   required: true
  },
  password: {
   type: String,
   trim: true,
  //  default: '', 
   required: true
  }
 });

// UserSchema.pre('save', function(next) {                                                                                                                                        
//   this.password = bcrypt.hashSync(this.password, 10);                                                                                                                                                                       
//   next();                                                                                                                                     
// }); 
 
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


var User = mongoose.model('User', UserSchema);
module.exports = User;