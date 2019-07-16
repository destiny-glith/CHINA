var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./api/index');
var apiUsersRouter = require('./api/users');
// cors解决跨域问题
var allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next(); // 所有的接口都会经过这里，继续操作
}
var app = express();

app.use(allowCrossDomain); // 整个应用生效
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 不分离
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// 分离
app.use('/', apiUsersRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
