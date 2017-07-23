const PORT = process.env.PORT || 3001;

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const db = require('./config/db');

// MONGOOSE CONFIGURATION
mongoose.Promise = Promise;
mongoose.connect(db.url, (err) => {
  console.log(err || `MongoDB connected to ${db.name}`); // eslint-disable-line no-console
}); //

const app = express();

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/public'));
}

/*  EJS TEMPLATE  *//*  EJS TEMPLATE  *//*  EJS TEMPLATE  */
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

//  index page
app.get('/', (req, res) => {
  // res.render will look in 'views' folder for the view
  // so the full path would look like '/views/pages/index'
  res.render('pages/index');
});

//  about page
app.get('/about', (req, res) => {
  res.render('pages/about');
});

/*  EJS TEMPLATE  *//*  EJS TEMPLATE  *//*  EJS TEMPLATE  */


app.set('port', PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));

//  ROUTES
app.use('/api', require('./routes/api'));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
