let mongoose	= require('mongoose'),
    Schema 		= mongoose.Schema,
    plm = require('passport-local-mongoose');
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
  alias         : { type: String, required: false, trim: true},
  location      : { type: String, required: false},
  label         : { type: String, required: false, trim: true},
  city          : { type: String, required: false, trim: true},
  publicEmail   : { type: String, required: false, trim: true},
  officialSite  : { type: String, required: false, trim: true},
  salt          : { type: String, required: true, trim: true, unique: true, select: false},
  addedOn       : {	type: String, required: false}
});
userSchema.pre('save', function(next) {
  if (!this.addedOn) {
    this.addedOn = (new Date().addHours(2)).toUTCString();
  }
  this.alias ? true : this.alias = ""; 
  this.location ? true : this.location = "";
  this.label ? true : this.label = "";
  this.city ? true : this.city = "";
  this.publicEmail ? true : this.publicEmail = "";
  /*var fields = ["alias", "location", "label", "city", "publicEmail", "officialSite", "salt"];
  console.log("Before the loop");
  for (var i = 0; i < fields.length; i++) {
     var field = userSchema.get(fields[i].toString());
     if(field == null){
        userSchema.set(fields[i], "");
        console.log("Field is null " + fields[i]);
     }
     else {
       userSchema.set(fields[i], "Did not work");
       console.log(fields[i] + " field is NOT null => " + field);
     }
  }
  console.log("After the loop"); */ 
  next();
});
userSchema.plugin(plm);
var User = mongoose.model('User', userSchema);
module.exports = User;