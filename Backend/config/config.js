module.exports={
    url:process.env.MONGO||"mongodb+srv://praveen7777:Praveen@7@cluster0.wta6l.mongodb.net/<dbname>?retryWrites=true&w=majority",
    port:process.env.PORT || 3000,
    options:{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }
}