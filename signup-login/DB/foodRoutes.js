// foodRoutes.js
const express = require('express');
const router = express.Router();
const FoodModel = require('./models/foodModel');

// Define endpoint for fetching food data
router.get('/fooddata', async (req, res) => {
  try {
    const foodData = await FoodModel.find({}); // Retrieve food items
    // console.log('Food Data:', foodData); // Add this line
    res.json(foodData);
  } catch (error) {
    console.error('Error fetching food data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create and save a new food item
router.post('/createFood', async (req, res) => {
  try {
    // Example data for a new food item
    const newFoodData = {
      "Name": "Senuda",
      "Brand": "Sen",
      "Category": "Bevarage",
    };

    // Create a new instance of the FoodModel
    const newFoodItem = new FoodModel(newFoodData);

    // Save the new food item to the database
    const savedFood = await newFoodItem.save();

    res.json(savedFood);
    console.log('Food item saved:', savedFood);
  } catch (error) {
    console.error('Error saving new food item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
