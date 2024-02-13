const express = require('express');
const router = express.Router();
const path = require('path');

// Route for homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  '..' ,  'views', 'home.html'));
});


// router.all("*", (req,res) => {
//   res.status(404).sendFile(path.join(__dirname,"..","views","404.html"));
// })

module.exports = router;