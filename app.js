const express = require('express');
const path = require('path');
const cors = require('cors');
const {logger} = require('./middleWares/logEvents');
const errorHandler = require('./middleWares/errorHandler');
const PORT = process.PORT || 3000;
const app = express();
const whitelist = []
const corsOptions = {
  origin:(origin, callback) =>{
    if ( whitelist.indexOf(origin) !== -1 || !origin ){
      callback(null,true)
      // console.log(whitelist.indexOf(origin !== -1));
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

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  }); 