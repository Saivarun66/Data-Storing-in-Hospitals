const mongoose = require('mongoose')
var Department = new mongoose.Schema({
    dept_id:Number,
    deptname:String,
    dept_type:String
})
module.exports = mongoose.model('Department', Department);