const mongoose = require('mongoose')
var doctor = new mongoose.Schema({
   doc_id:String,
   doc_name:String,
   qual:String,
   doc_type:String,
   city:String,
   dep_i:String
})
module.exports = mongoose.model('doctor', doctor);