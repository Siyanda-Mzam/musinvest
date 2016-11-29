var express = require("express");
var mongo = require('mongodb');
var mongoose = require('mongoose');
var User = require('../models/user.js');
var db = mongoose.connect('mongodb://localhost:27017/scoutz');
var router = express.Router();
var crypto = require('crypto');
db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});


router.post('/signup', function(req, res) {
	console.log("We're signing up ");
	if (req.body.name && req.body.surname &&
	req.body.password && req.body.email) {
		console.log(req.body);
		var role = JSON.stringify(req.body.role);
		var hash = hashPassword(req.body.password);
		var newUser = new User({
			firstname: req.body.name,
			lastname: req.body.surname,
			email: req.body.email,
			password: hash.pwd,
			salt: hash.salt,
			role: role.slice(role.lastIndexOf(' ')).trim(),
			alias: req.body.alias ? req.body.alias : "",
			location: req.body.location ? req.body.location : "",
			label: req.body.label ? req.body.label : "",
			city: req.body.city ? req.body.city : "",
			publicEmail: req.body.publicEmail ? req.body.publicEmail : "",
			officialSite: req.body.officialSite ? req.body.officialSite : "",
			addedOn : (new Date().addHours(2)).toUTCString()
		});
		newUser.save(function(err) {
			if (err) {
				console.log("User exists", err );
				res.status(500);
			} else {
				console.log("Successfully created a user with name: %s and comes from %s and user was created at %s",
					newUser.firstname, newUser.location, newUser.addedOn);
				res.status(200);
			}
		});
		res.redirect('../../client/home/home.component.html');
	}
	else
	{
		console.log("You have not decided if you are a scouter or artist. What the fuck?")
	}
});

router.post('/signin', function(req, res) {
	console.log("In the login route");
	User.findOne({
		email: req.body.email,
		password: req.body.password
	}, function(err, person) {
		if (err) {
			console.log("MongoDB Error: " + err);
			return res.status(500); // or callback
		}
		if (person) {
			console.log("Welcome back %s", person);
			return res.status(200);
		} else {
			console.log("%s does not exist. Check you email, password or try signup", req.body.email);
			return res.status(404);
		}
	});
});


// For some reason GMT time is 2 hours
// behind in South Africa. So this is
// a quick fix of the problem.
Date.prototype.addHours = function(h){
    this.setHours(this.getHours() + h);
    return this;
}
/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var hashMachine = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

function hashPassword(userpassword) {
    var salt = genRandomString(16); /** Get salt of length 16 */
    var passwordData = hashMachine(userpassword, salt);
    return {
    	salt:passwordData.salt,
    	pwd: passwordData.passwordHash
    };
}
module.exports = router;