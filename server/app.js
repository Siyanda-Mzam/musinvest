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
var mongo = require('mongodb');
var mongoose = require('mongoose');
var User = require('./models/users.js');
var flash = require('express-flash');
var jquery = require('jquery');
var crypto = require('crypto');
var db = mongoose.connect('mongodb://localhost:27017/scoutz');
mongoose.Promise = global.Promise;
var router = express.Router();
var app = express();


app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

var User = require('./models/user.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});