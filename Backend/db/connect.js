const mongoose=require('mongoose')
const config=require('../config/config')
module.exports.connect=mongoose.connect(config.url,config.options)
var mongodb=mongoose.connection
mongodb.on('connected',()=>{
    console.log('mongodb connected')
})
mongodb.on('disconnected',()=>{
    console.log('mongodb disconnected')
})
module.exports.disconnect=()=>{
    mongoose.disconnect();
}