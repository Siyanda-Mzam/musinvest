var express = require("express");
var session = require("express-session");
var cookies = require("cookie-parser");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var util = require("util");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var app = express();


app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('port', process.env.PORT || 4201);
app.set(express.static(path.join(__dirname, '../app')));
db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});