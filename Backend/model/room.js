const mongoose = require('mongoose')
var room = new mongoose.Schema({
    room_id:Number,
    block:String,
    floor:Number,
    room_type:String
})
module.exports = mongoose.model('room', room);