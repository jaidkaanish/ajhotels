const express = require('express')
const app = express();
const db = require('./db')
require('dotenv').config();
const passport= require('./auth')
const Person = require('./model/person')
const localStrategy = require('passport-local').Strategy; 

const bodyParser = require("body-parser")
app.use(bodyParser.json())

const menuItem = require("./model/menuItem")

//middleware
const logRequest = (req,res,next)=>{
  console.log(`${new Date().toLocaleString()} req made: ${req.originalUrl}`);
  next();
}

app.use(logRequest);

const localauthMiddleware = passport.authenticate('local',{session:false})
app.use(passport.initialize())
app.get('/', function (req, res) {
  res.send('Hello World')
})

const personRoutes= require('./routes/personRoutes')
app.use('/person',personRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server is listening ')
})