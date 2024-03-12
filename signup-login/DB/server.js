// server.js
const express = require('express');
const mongoose = require('mongoose');
const foodRoutes = require('./foodRoutes');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://nutrimatecs14:nutrimatesdgp@nutrimate-db.cy528h9.mongodb.net/?retryWrites=true&w=majority&appName=Nutrimate-DB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB:', db.name);
});

// Middleware to parse JSON in request body
app.use(express.json());

// Use the foodRoutes for /api
app.use('/api', foodRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
