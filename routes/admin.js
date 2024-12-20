// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/adminbase');
}); 
 


module.exports = router;
