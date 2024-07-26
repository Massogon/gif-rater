const express = require('express');
const router = express.Router();
const { fetchGifById } = require('../controllers/api/gifController');
const gifController = require('controllers/api/gifController.js'); // Note the './' for same directory

// Route to fetch GIF by index
router.get('/gif/:id', gifController.fetchGifById);

module.exports = router;
