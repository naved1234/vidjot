const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load Idea Model
require('../models/Idea');
const Idea = mongoose.model('ideas');

// User Login Route
router.get('/login', (req, res) => {
  res.render('users/login');
});

// User Register Route
router.get('/register', (req, res) => {
  res.render('users/register');
});

module.exports = router;