// foodRoutes.js
const express = require('express');
const router = express.Router();
const FoodModel = require('./models/foodModel');

const User = require("./models/userModel")

//  endpoint for fetching food data
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

//  endpoint for saving health quiz answers
router.post('/healthquiz', async (req, res) => {
  try {
    // Extract the health quiz answers from the request body
    console.log(req.body)
    const { uid,health_conditions, dietary_preferences, food_avoidance, age_group, health_goal } = req.body;

    // Create a new user instance with the health quiz answers
    const user = new User({
      uid,
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


// Endpoint to save scanned item to the database 

router.post('/saveScannedItem', async (req, res) => {
  try {
    // Extract uid and scannedItem from request body
    const { uid, scannedItem } = req.body;

    // Find the user with the given uid
    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add the scannedItem to the user's scanned_items array
    user.scanned_items.push(scannedItem);

    // Save the updated user document back to the database
    const savedUser = await user.save();

    res.status(200).json(savedUser);
  } catch (error) {
    console.error('Error saving scanned item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
