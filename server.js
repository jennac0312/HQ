require('dotenv').config();
require('./config/database');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

const hqRoute = require('./routes/hq/hq')
const intelRoute = require('./routes/intelligence/intelligence')
const quizRoute = require('./routes/quiz/quiz')
const shRoute = require("./routes/safehouse/safehouse")

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// hq posts
app.use('/hq', hqRoute)

// intelligence
app.use('/intelligence', intelRoute)

// quiz
app.use('/quiz', quizRoute)

// safehouse
app.use('/safehouse', shRoute)

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`Express app running on port ${PORT}`);
});
