const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const cors = require('cors');
const jwt = require('jsonwebtoken')
const db = require('./Backend/db/connect');
const Usermodel = require('./Backend/model/usermodel')
const Hospitalmodel =require('./Backend/model/hospital')
const Medicinemodel =require('./Backend/model/medicine')
const Doctormodel=require('./Backend/model/doctor')
const config = require('./Backend/config/config');
const userlib = require('./Backend/lib/itemlib')
let app = express();
db.connect;
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Frontend'));

app.listen(config.port, () => {
    console.log('connected at port 3000');
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Frontend/html/login.html');
})
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/Frontend/html/signup.html');
})
app.get('/AdminPage', (req, res) => {
    res.sendFile(__dirname + '/Frontend/html/AdminPage.html');
})
app.get('/HospitalPage',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/html/HospitalPage.html')
})
app.get('/DoctorPage',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/html/doctor.html')
})
app.get('/MedicinePage',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/html/medicine.html')
})
app.post('/signupdata', async (req, res) => {
    let register = {
        Name: req.body.name,
        UserName: req.body.username,
        Password: await bcrypt.hash(req.body.password, 7),
        Gmail: req.body.email
    }
    try {
        let SaveUserData = new Usermodel(register);
        await SaveUserData.save().then((data) => {
            res.send(data);
        }).catch(err => {
            console.log(err);
            res.send(err)
        })
    } catch (err) {
        console.log(err)
    }
})
app.post('/logindata', async (req, res) => {
    let UserDetails = {
        UserName: req.body.Username
    }
    console.log(req.body.Password)
    try {
        let getUserdetails = await userlib.getItemByQuery(UserDetails, Usermodel, async (err, data) => {
            if (err)
                res.send(err)
            else {
                if (data.length != 0) {
                    console.log(1)
                    await bcrypt.compare(req.body.Password, data[0].Password, function (err, result) {
                        console.log(result)
                        if (err) {
                            res.send(err);
                        } else {
                            let token = jwt.sign({
                                username: req.body.Username
                            }, 'Budget-Calculator');
                            res.send({
                                token,
                                result
                            })
                        }
                    });
                } else {
                    res.send(false)
                }
            }
        });

    } catch (error) {
        console.log(1)
        res.send(error)
    }
})
app.post('/FillHospitalsDetails',(req,res)=>{
   if(req.body.Hos_id.length && req.body.Hos_name && req.body.Hos_loc)
   {
       let data={
           hosp_id:req.body.Hos_id,
           hosp_name:req.body.Hos_name,
           location:req.body.Hos_loc
       }
    userlib.createitem(data,Hospitalmodel,(err,data)=>{
        if(err)
        res.send(err)
        else
        res.send(data)
    })
   }
})
app.post('/DoctorDetails',(req,res)=>{
    //if(req.body.id.length && req.body.name.length && req.body.qual.length && req.body.doc_type.length && req.body.city.length && req.body.dep_i.length)
    {
        let data={
            doc_id:req.body.id,
            doc_name:req.body.name,
            qual:req.body.qual,
            doc_type:req.body.type,
            city:req.body.city,
            dep_i:req.body.depi
        }
     userlib.createitem(data,Doctormodel,(err,data)=>{
         if(err)
         res.send(err)
         else
         res.send(data)
     })
    }
 })
 app.post('/MedicineDetails',(req,res)=>{
    //if(req.body.id.length && req.body.name.length && req.body.qual.length && req.body.doc_type.length && req.body.city.length && req.body.dep_i.length)
    {
        let data={
           med_id: req.body.id,
            med_name:req.body.name,
           price: req.body.price,
            code:req.body.code,
            mfg_date:req.body.mfgdate,
            exp_date:req.body.expdate
        }
     userlib.createitem(data,Medicinemodel,(err,data)=>{
         if(err)
         res.send(err)
         else
         res.send(data)
     })
    }
 })
 app.get('/AllHospitals',(req,res)=>{
    userlib.getAllItems(Hospitalmodel,(err,data)=>{
        if(err)
        res.send(err);
        else
        res.send(data);
    })
 })
 app.get('/AllMedicine',(req,res)=>{
    userlib.getAllItems(Medicinemodel,(err,data)=>{
        if(err)
        res.send(err);
        else
        res.send(data);
    })
 })
 app.get('/AllDoctor',(req,res)=>{
    userlib.getAllItems(Doctormodel,(err,data)=>{
        if(err)
        res.send(err);
        else
        res.send(data);
    })
 })