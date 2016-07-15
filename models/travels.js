var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TravelSchema = new Schema({
  description: String,
  city: String,
  country: String,
  year_visited: String,
  video: String, //attach link to vimeo.com
  image: String,
  international: Boolean

});

var Travel = mongoose.model('Travel', TavelSchema); //set travel model to variable 'Travel'

module.exports = Travel;  //allows other files to access 'Travel' database
