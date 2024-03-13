// foodModel.js
const mongoose = require('../config/db');

const foodSchema = new mongoose.Schema({
  product_name: String,
  brand: String,
  category: String,
});

const FoodModel = mongoose.model('Food', foodSchema, 'Food-Data');

module.exports = FoodModel;
