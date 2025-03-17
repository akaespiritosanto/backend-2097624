var createError = require('http-errors');
var express = require('express');
var fs = require("fs");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();

// =====================================================================================

function log(req, res){
  var path = req.route.path;
  var method = req.method;
  var date = new Date();

  var str = "Path: " + path + "Method" + method + "Date: " + date;
  fs.appendFileSync("log.txt", str); 
}

app.get("/", (req, res) =>{
  log(req, res);
  var body = "Hello World";
  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(body),
    "Content-type": "text/plain"
  })
  res.end(body);
})

app.get("/html", (req, res) =>{
  var body = fs.readFileSync("./index.html", "utf-8");
  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "text/html"
  })
  res.end(body);
})

app.get("/", (req, res) =>{
  var body = fs.readFileSync("./index.html", "utf-8");
  body = body.replace("date",new Date())
  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "text/html"
  })
  res.end(body);
})

app.get("/user/:name", (req, res) =>{
  var username = req.params.name;
  var message = "Hello World and " + username;
  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(message),                 
    "Content-Type": "text/html"
  })
  res.end(message);
}) 

app.get("/logs", (req, res) =>{
  var logs = fs.readFileSync("./log.txt", "utf-8");
  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(logs),
    "Content-Type": "text/html"
  })
  res.end(logs);
})

app.get("/download", (req, res) =>{
  message = "Downloading..."
  res.download("http://localhost:3000/download")
  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(message),
    "Content-Type": "text/html"
  })
  res.end(message)
})

// =====================================================================================

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

app.post("/root", (req, res) => {
  res.writeHead.send("Hello world!")
})

module.exports = app;

