const gifIds = require('../../config/storingGifs');

function getRandomGifId() {
    return gifIds[Math.floor(Math.random() * gifIds.length)];
}

function displayRandomGifs() {
    document.getElementById('gif1').src = `https://media.giphy.com/media/${getRandomGifId()}/giphy.gif`;
    document.getElementById('gif2').src = `https://media.giphy.com/media/${getRandomGifId()}/giphy.gif`;
}

document.addEventListener('DOMContentLoaded', () => {
    displayRandomGifs();
});