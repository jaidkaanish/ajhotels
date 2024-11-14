const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/hotels';
//const mongoUrl="mongodb+srv://anishjaidka1201:anish123@cluster0.viuf3.mongodb.net/"

mongoose.connect(mongoUrl);
require('dotenv').config();

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('Error connecting to MongoDB server:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;