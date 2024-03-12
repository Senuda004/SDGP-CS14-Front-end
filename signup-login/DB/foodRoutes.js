// foodRoutes.js
const express = require('express');
const router = express.Router();
const FoodModel = require('./models/foodModel');

const User = require("./models/userModel")

// Define endpoint for fetching food data
router.get('/fooddata', async (req, res) => {
  try {
    const foodData = await FoodModel.find({ Brand: 'smak' }); // Retrieve food items
    // console.log('Food Data:', foodData); // Add this line
    res.json(foodData);
  } catch (error) {
    console.error('Error fetching food data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Define endpoint for saving health quiz answers
router.post('/healthquiz', async (req, res) => {
  try {
    // Extract the health quiz answers from the request body
    console.log(req.body)
    const { health_conditions, dietary_preferences, food_avoidance, age_group, health_goal } = req.body;

    // Create a new user instance with the health quiz answers
    const user = new User({
      health_conditions,
      dietary_preferences,
      food_avoidance,
      age_group,
      health_goal,
    });

    // Save the user to the database
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error saving health quiz answers:', error);
    res.status(500).json({ error: ' Server Error' });
  }
});

module.exports = router;
