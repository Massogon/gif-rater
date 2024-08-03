const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Route to render the landing page
router.get('/', async (req, res) => {
  try {
    res.render('landingpage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to render the GIF rating page
router.get('/gifrater', withAuth, async (req, res) => {
  try {
    res.render('gifrater', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for the login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/gifrater');
    return;
  }

  res.render('login');
});

module.exports = router;
