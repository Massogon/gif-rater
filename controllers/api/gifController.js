const fetch = require('node-fetch');
const gifIds = require('../config/giphy'); // Import the GIF IDs
const apiKey = 'u2pOxWTt6rRGBMpIqwtN22Lu21FX2TLz';

async function fetchGifById(req, res) {
  const { id } = req.params; // Assume the ID is passed as a route parameter
  const gifId = gifIds[id]; // Get the GIF ID from the array by index

  if (!gifId) {
    return res.status(404).send('GIF not found');
  }

  const giphyEndpoint = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`;
  try {
    const response = await fetch(giphyEndpoint);
    const data = await response.json();
    res.render('gifs', { gifs: [data.data] }); // Pass the GIF data as an array
  } catch (error) {
    console.error('Error fetching GIF:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  fetchGifById,
};
