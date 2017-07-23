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

//  index page
app.get('/', (req, res) => {
  const drinks = [
    { name: 'Bloody Mart', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scoth', drunkness: 10 },
  ];
  const tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

  res.render('pages/index', {
    drinks,
    tagline,
  });
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
