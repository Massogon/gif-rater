const express = require('express');
const router = express.Router();
const { fetchGifById } = require('../controllers/giphyController');

// Route to fetch GIF by index
router.get('/gif/:id', fetchGifById);

module.exports = router;
