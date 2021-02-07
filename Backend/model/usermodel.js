const mongoose = require('mongoose')
var User = new mongoose.Schema({
    Name: String,
    UserName: String,
    Password: String,
    Gmail: String,
    Admin: Boolean

})
module.exports = mongoose.model('User', User);