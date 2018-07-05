const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt'); 


const UserSessionSchema = new Schema({
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


UserSessionSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var UserSession = mongoose.model('UserSession', UserSessionSchema);
module.exports = UserSession;