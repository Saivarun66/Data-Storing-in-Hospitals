const mongoose = require('mongoose')
var Hospital = new mongoose.Schema({
    hosp_id:String,
    hosp_name:String,
    location:String
})
module.exports = mongoose.model('Hospital', Hospital);