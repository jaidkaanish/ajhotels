const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoUrl);

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