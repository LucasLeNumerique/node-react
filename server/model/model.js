const mongoose = require('mongoose');
const { Schema } = require('mongoose')

const peopleSchema = new Schema({
  name: String,
  email: String,
  age: Number
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;