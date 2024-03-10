// foodRoutes.js
const express = require('express');
const router = express.Router();
const FoodModel = require('./models/foodModel');

// Define endpoint for fetching food data
router.get('/fooddata', async (req, res) => {
  try {
    const foodData = await FoodModel.find(); // Retrieve all food items
    console.log('Food Data:', foodData); // Add this line
    res.json(foodData);
  } catch (error) {
    console.error('Error fetching food data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
