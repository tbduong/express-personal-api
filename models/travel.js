var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TravelSchema = new Schema({
  city: String,
  state: String,
  country: String,
  year_visited: String,
  video: String,      //attach link to vimeo.com
  image: String,      //upload local img
  international: Boolean
});

var Travel = mongoose.model('Travel', TravelSchema); //set travel model to variable 'Travel'

module.exports = Travel;  //allows other files to access 'Travel' database
