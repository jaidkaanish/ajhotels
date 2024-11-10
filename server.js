const express = require('express')
const app = express();
const db = require('./db')
require('dotenv').config();

const bodyParser = require("body-parser")
app.use(bodyParser.json())

const menuItem = require("./model/menuItem")

app.get('/', function (req, res) {
  res.send('Hello World')
})

const personRoutes= require('./routes/personRoutes')
app.use('/person',personRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server is listening ')
})