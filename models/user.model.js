const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');                                                                                                                                          



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


var User = mongoose.model('User', UserSchema);
module.exports = User;