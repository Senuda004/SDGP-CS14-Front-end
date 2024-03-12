// userModel.js
const mongoose = require('../config/db');

const userSchema = new mongoose.Schema({
  health_conditions: String,
  dietary_preferences: String,
  food_avoidance: String,
  age_group: String,
  health_goal: String,
});

// const FoodModel = mongoose.model('Food', foodSchema, 'Food-Data');
const User = mongoose.model('User', userSchema ,'User-Data');

module.exports = User;
