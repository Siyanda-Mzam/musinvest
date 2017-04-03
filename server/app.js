let express = require("express"),
    session = require("express-session"),
    cookies = require("cookie-parser"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    LocalStrategy = require('passport-local').Strategy,
    util = require("util"),
    path = require('path'),
    shared = require('./shared/config.json'),
    logger = require('morgan'),
    index = require('./routes/index'),
    sign = require('./routes/sign'),
    app = express(),
    cors = require('cors');

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookies());
app.use(function (req, res, next) {
    res.setHeader(shared.headers.ACAO, shared.ORIGIN + shared.ports.CLIENT_PORT);
    res.setHeader(shared.headers.ACAM, shared.ALLOWED_METHODS);
    res.setHeader(shared.headers.ACAH, shared.ALLOWED_HEADERS);
    res.setHeader(shared.headers.ACAC, false);
    next();
});
app.set('views', path.join(__dirname, shared.VIEWS_DIR));
app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || shared.ports.SERVER_PORT);
app.set(express.static(path.join(__dirname, shared.STATIC_DIR)));
app.get('/', index);
app.post('/signup', sign)
app.post('/signin', sign);

app.listen(app.get('port'), function(){
  console.log("Listening from some motherfucking port: " + app.get('port'));
});
