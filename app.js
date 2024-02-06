const express = require('express');
const path = require('path');
const logEvents = require('./middleWares/logEvents')
const PORT = process.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
  logEvents(`${req.methode}\t${req.headers.origin}\t${req.url}\n`, 'reqlogs.txt')
  console.log(`${req.method} ${req.path}`);
  next();
});

// app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  }); 