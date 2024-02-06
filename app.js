const express = require('express');
const path = require('path');
const cors = require('cors');
const {logger, logEvents} = require('./middleWares/logEvents')
const PORT = process.PORT || 3000;
const app = express();
const whitelist = ['https://www.google.com']
const corsOptions = {
  origin:(origin, callback) =>{
    if ( whitelist.indexOf(origin !== -1)){
      callback(null,true)
    } else {
      callback(new Error('Not allowed by cors'))
    }
  },
  optionsSuccessStatus:200
}

app.use(logger);
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger);

// app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  }); 