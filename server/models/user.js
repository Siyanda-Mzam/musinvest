let mongoose	= require('mongoose'),
    Schema 		= mongoose.Schema,
    plm = require('passport-local-mongoose'),
	defs = require("../shared/config.json");
Date.prototype.addHours = function(h){
    this.setHours(this.getHours() + h);
    return this;
}
var userSchema = new Schema({
  firstname     : {	type: String, trim: true},
  lastname      : {	type: String, trim: true},
  email         : { type: String, required: true, unique: true, trim: true},
  password      : { type: String, required: true, select: false},
  role          : { type: String, required: true, trim: true},
  alias         : { type: String, required: false, trim: true, default: defs.user_defaults.ALIAS},
  location      : { type: String, required: false, default: defs.user_defaults.LOCATION},
  label         : { type: String, required: false, trim: true, default: defs.user_defaults.LABEL},
  city          : { type: String, required: false, trim: true, default: defs.user_defaults.CITY},
  publicEmail   : { type: String, required: false, trim: true, default: defs.user_defaults.PUBLIC_EMAIL},
  officialSite  : { type: String, required: false, trim: true, default: defs.user_defaults.OFFICIAL_SITE},
  salt          : { type: String, required: true, trim: true, unique: true, select: false},
  addedOn       : {	type: String, required: false, default: defs.user_defaults.ADDED_ON}
});
userSchema.pre('save', function(next) {
  if (this.addedOn == defs.user_defaults.ADDED_ON) {
    this.addedOn = (new Date().addHours(defs.locale.SA_GMT)).toUTCString();
  }
  next();
});
userSchema.plugin(plm);
var User = mongoose.model('User', userSchema);
module.exports = User;