const mongoose = require('mongoose');

const db = async () => {
    mongoose.connect('mongodb+srv://lucasschrever:lucas@mongo-learning.7p4mb.mongodb.net/?retryWrites=true&w=majority&appName=mongo-learning')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}

module.exports = db