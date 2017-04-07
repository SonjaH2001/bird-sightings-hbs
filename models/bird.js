var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');//this is a plug in for Mongoose


/* Represents a bird species */
// these atributes will be added to the db

//this is server side stuff, fyi
var birdSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, uniqueCaseInsensitive: true },
  description: String,
  averageEggsLaid: {type: Number, min: 1, max: 50 },//no negative numbers
  threatened: { type: Boolean, default: false },   // Is species endangered?
  datesSeen: [ { type: Date, default: Date.now, validate: {
    validator : function(date) {
    //return false if date is in the future
        //now is UNIX time, same for everyone.
      return (date.getTime() < Date.now()) ; //time is less than now, in past
    }, message: '{VALUE} is not a valid sighting date. Date must be in the past'
  }} ],
  nest: { location: String, materials: String }
});

var Bird = mongoose.model('Bird', birdSchema);
birdSchema.plugin(uniqueValidator);

module.exports = Bird;