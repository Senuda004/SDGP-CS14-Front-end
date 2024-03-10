// foodModel.js
const mongoose = require('../config/db');

const foodSchema = new mongoose.Schema({
  name: String,
  calories: Number,
});

const FoodModel = mongoose.model('Food', foodSchema, 'Food-Data');

module.exports = FoodModel;
