// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/about', (req, res) => {
  res.render('pages/about');
});

router.get('/bedrooms', (req, res) => {
  res.render('pages/bedrooms');
});

router.get('/interiors', (req, res) => {
  res.render('pages/interiors');
});

router.get('/halls', (req, res) => {
  res.render('pages/halls');
});

router.get('/kitchens', (req, res) => {
  res.render('pages/kitchens');
});

router.get('/paintings', (req, res) => {
  res.render('pages/paintings');
});

router.get('/wardrobes', (req, res) => {
  res.render('pages/wardrobes');
});

module.exports = router;
