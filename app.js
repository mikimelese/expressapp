const express = require('express');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/CorsOptions')
const {logger} = require('./middleWares/logEvents');
const errorHandler = require('./middleWares/errorHandler');
const verifyJWT = require('./middleWares/verifyJWT');
const cookieParser = require('cookie-parser');
const PORT = process.PORT || 3000;
const app = express();


app.use(logger);
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger);

// app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(cookieParser());
app.use('/', require('./routes/index'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use(verifyJWT);
app.use('/per', require('./routes/api/persons'));

app.use(errorHandler);

app.all("*", (req,res) => {
  res.status(404).sendFile(path.join(__dirname,"views","404.html"));
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });