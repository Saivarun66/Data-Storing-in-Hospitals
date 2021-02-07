const mongoose = require('mongoose')
var staff = new mongoose.Schema({
    staff_id:Number,
    staffname:String,
    street:String,
    pin:Number
})
module.exports = mongoose.model('staff', staff);