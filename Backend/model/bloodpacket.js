const mongoose = require('mongoose')
var Bloodpacket = new mongoose.Schema({
    packet_id:Number,
    bloodgroup:String,
    donorname:String,
    charge:Number,
    hospital_id:Number,
    camp_id:Number
})
module.exports = mongoose.model('Bloodpacket', Bloodpacket);