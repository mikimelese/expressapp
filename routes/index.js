const express = require('express');
const router = express.Router();
const path = require('path');
const testController = require('../controllers/testController');

// Route for homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  '..' ,  'views', 'home.html'));
});

// Route for product details
router.get('/per/:id', testController.getPerson);

router.all("*", (req,res) => {
  res.status(404).sendFile(path.join(__dirname,"..","views","404.html"));
})

module.exports = router;