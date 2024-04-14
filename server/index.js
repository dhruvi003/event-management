const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const fs = require('fs').promises;

const app = express();
app.use(express.json())
app.use(cors())

//create connection
 
mongoose.connect("mongodb://127.0.0.1:27017/user") 

const db = mongoose.connection;
 
 db.on('error', console.log.bind(console, 'connection error:'));
 db.once('open', function() {
    console.log('We are connected to MongoDB!');
    console.log('Connected to database:', db.name);
  });

  
app.post("/login", (req,res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")

            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("No record Existed")
        }
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

app.post('/signup', (req,res) =>{
    console.log(req.body)
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log('server is running')
})

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Restricted