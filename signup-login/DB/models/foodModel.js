const mongoose = require('./config/db');  // Import the mongoose object

const foodSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  // Add other fields as needed
});

const FoodModel = mongoose.model('Food', foodSchema);

module.exports = FoodModel;  // Export the model for use in other parts of your backend
