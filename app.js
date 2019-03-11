const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { User, Thing, Favorite } = require('./db/index');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', (req, res, next) => {
  User.findAll({
    include: [
      { model: Favorite, include: { model: Thing } },
    ],
  })
    .then(usersAndFavorites => res.send(usersAndFavorites))
    .catch(next);
});

app.get('/api/things', (req, res, next) => {
  Thing.findAll({ include: [{ model: Favorite, include: User }] })
    .then(thingsAndFavoritedBy => res.send(thingsAndFavoritedBy))
    .catch(next);
});

//handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Internet server error');
});

module.exports = app;
