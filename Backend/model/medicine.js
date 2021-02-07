const mongoose = require('mongoose')
var medicine = new mongoose.Schema({
    med_id:String,
    med_name:String,
    price:String,
    code:String,
    mfg_date:String,
    exp_date:String
})
module.exports = mongoose.model('medicine', medicine);