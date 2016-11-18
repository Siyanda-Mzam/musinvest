var mongoose	= require('mongoose');
var Schema 		= mongoose.Schema;
var plm = require('passport-local-mongoose');
Date.prototype.addHours = function(h){
    this.setHours(this.getHours() + h);
    return this;
}
var userSchema = new Schema({
  firstname     : {	type: String, trim: true},
  lastname      : {	type: String, trim: true},
  email         : { type: String, required: true, unique: true, trim: true},
  password      : { type: String, required: true},
  alias         : { type: String, required: false, trim: true},
  location      : { type: String, required: false},
  label         : { type: String, required: false, trim: true},
  city          : { type: String, required: false, trim: true},
  publicEmail   : { type: String, required: false, trim: true},
  officialSite  : { type: String, required: false, trim: true},
  salt          : { type: String, required: true, trim: true},
  addedOn       : {	type: String, required: false}
});
userSchema.pre('save', function(next) {
  if (!this.addedOn)
  	this.addedOn = (new Date().addHours(2)).toUTCString();
  next();
});
userSchema.plugin(plm);
var User = mongoose.model('User', userSchema);
module.exports = User;