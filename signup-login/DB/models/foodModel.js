// foodModel.js
const mongoose = require('../config/db');

const foodSchema = new mongoose.Schema({
  ProductName: String,
  Brand: String,
});

const FoodModel = mongoose.model('Food', foodSchema, 'Food-Data');

module.exports = FoodModel;
