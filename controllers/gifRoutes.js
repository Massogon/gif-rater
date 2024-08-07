const router = require('express').Router();
const GifPair = require('../models/GifPair');

router.post('/incrementScore', async (req, res) => {
    const { gif_id_1, gif_id_2 } = req.body;

    try {
        const result = await GifPair.increment('score', {
            by: 1,
            where: {
                gif_id_1: gif_id_1,
                gif_id_2: gif_id_2,
            },
        });

        if (result[0][1] === 0) {
            res.status(404).json({ message: 'Pair not found' });
        } else {
            res.status(200).json({ message: `Incremented score for ${gif_id_1} and ${gif_id_2}` });
        }
    } catch (error) {
        console.error('Error incrementing score:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/getScore', async (req, res) => {
    try {
        const { gif_id_1, gif_id_2 } = req.body;
        const gifPair = await GifPair.findOne({
            where: {
                gif_id_1: gif_id_1,
                gif_id_2: gif_id_2
            }
        });

        if (gifPair) {
            res.json({ score: gifPair.score });
        } else {
            res.status(404).send('Pair not found');
        }
    } catch (error) {
        console.error('Failed to fetch score:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;