var express = require("express");
var session = require("express-session");
var cookies = require("cookie-parser");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var util = require("util");
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var index = require('./routes/index');
var sign = require('./routes/sign');
var app = express();
var cors = require('cors');

app.use(cors());

app.set('port', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.set(express.static(path.join(__dirname, '../app')));
app.get('/', index);
app.post('/signup', sign);
app.post('/signin', sign);

app.listen(app.get('port'), function(){
  console.log("Listening from some motherfucking port: " + app.get('port'));
});