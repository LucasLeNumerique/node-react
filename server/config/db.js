const mongoose = require('mongoose');

const db = async () => {
    mongoose.connect('')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}

module.exports = db