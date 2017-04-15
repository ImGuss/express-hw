const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');



app.get('/', (req, res, next) => {
  res.render('home.ejs');
  console.log('Hey, this works.');
});

app.get('/about', (req, res, next) => {
  res.render('about.ejs');
});

app.get('/gallery', (req, res, next) => {
  res.render('gallery.ejs');
});

app.listen(3000);
