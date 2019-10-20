var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*            Environmental Variables            */
// Blog Database
const blogDatabase = require('./src/data/db');
process.env.DB_HOST = process.env.BLOG_DB_HOST || "localhost";
// process.env.

// Routers
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var postsRouter = require('./src/routes/posts')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// connect to db
blogDatabase.sync()
  .then(() => {console.log("////---___>|| Connected to Database ||<___---\\\\\\\\")})
  .catch((err) => {console.error})

module.exports = app;
