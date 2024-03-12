// foodModel.js
const mongoose = require('../config/db');

const foodSchema = new mongoose.Schema({
  Name: String,
  Brand: String,
  Category: String,
});

const FoodModel = mongoose.model('Food', foodSchema, 'Food-Data');

module.exports = FoodModel;
