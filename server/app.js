var express = require("express")
var session = require("express-session")
var cookies = require("cookie-parser")
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var util = require("util");
var path = require('path');
var creds = require('./creds/config.json');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var index = require('./routes/index');
var sign = require('./routes/sign');
var app = express();
var cors = require('cors');

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookies());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + creds.config.CLIENT_PORT);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Headers we wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // We are not using sessions so there is no need for allowing control over creds
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.set('views', path.join(__dirname, '../client/src/home/'));
app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 4500);
app.set(express.static(path.join(__dirname, '../client/src')));
app.get('/', index);
app.post('/signup', sign)
app.post('/signin', sign);

app.listen(app.get('port'), function(){
  console.log("Listening from some motherfucking port: " + app.get('port'));
});
