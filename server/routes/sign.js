'use strict'

let express = require("express"),
	mongo = require('mongodb'),
	mongoose = require('mongoose'),
	creds = require('../creds/config.json'),
	User = require('../models/user.js'),
	db = mongoose.connect('mongodb://' + creds.config.USR + ':' + creds.config.PWORD + '@ds145299.mlab.com:45299/museinvest'),
	router = express.Router(),
	crypto = require('crypto'),
	jwt = require('jsonwebtoken'),
	secret = creds.config.jwtSecret;

mongoose.Promise = global.Promise;
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Database');
});


router.post('/signup', function(req, res) {
	console.log("Inside the signup route on server");
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
			role: role.slice(role.lastIndexOf(' ')).replace('"', ''), // Fix JSON.stringify() insane issue.
			alias: req.body.alias ? req.body.alias : "",
			location: req.body.location ? req.body.location : "",
			label: req.body.label ? req.body.label : "",
			city: req.body.city ? req.body.city : "",
			publicEmail: req.body.publicEmail ? req.body.publicEmail : "",
			officialSite: req.body.officialSite ? req.body.officialSite : "",
			salt: hash.salt,
			addedOn : (new Date().addHours(2)).toUTCString()
		});
		newUser.save(function(err) {
			if (err) {
				// Redirect the user back to the sign up page if the registration failed
				console.log("We have found an identical email in the database"); 
				res.status(500);
			} else {
				console.log("Successfully created a user with name: %s and comes from %s and user was created at %s",
					newUser.firstname, newUser.location, newUser.addedOn);
				return res.status(200);
			}
		});
		res.render('home.component.html');
	}
	else
	{
		console.log("What the fuck happened? This is a never-hit case unless the frontend is broken.\
					Front end will  never submit unless all the above info is supplied!")
	}
});

router.post('/signin', function(req, res) {
	console.log("Inside the signin route of the server");
	var pwd;
	let claim;
	var us = User.findOne({
		email: req.body.email
	});
	us.select('+salt').select('+password').exec(function(err, person) {
		if (err) {
			console.log("DataBase Error: " + err);
			return res.status(500); // or callback
		} else if (person) {
			pwd = req.body.password;
			if (person.password === hashMachine(pwd, person.salt).passwordHash) {
				console.log("Welcome back %s", person.firstname);
				claim = {
					userId: 1
				};
				res.body = {
					token: jwt.sign(claim, secret)
				};
				return res.status(200).send(res.body);
			}
			else
				return console.log("You have entered an incorrect password");
		} else {
				console.log("%s does not exist. Check you email, password or try signup", req.body.email);
			 	res.status(404);
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
 * For robust security we could hash the passwords more than once.
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