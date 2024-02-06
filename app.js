const express = require('express');
const path = require('path');

const app = express();

// app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });