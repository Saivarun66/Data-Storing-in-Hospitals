const mongoose = require('mongoose')
var patient = new mongoose.Schema({
   pat_id:Number,
   first_name:String,
   last_name:String,
   gender:String,
   city:String,
   pin:Number,
   doc_id:Number,
   hos_id:Number
})
module.exports = mongoose.model('patient', patient);