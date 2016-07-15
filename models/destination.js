var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DestinationSchema = new Schema({
  city: String,
  country: String,
  international: Boolean

});

var Destination = mongoose.model('Destination', DestinationSchema); //set destination model to variable 'Destination'

module.exports = Destination;  //allows other files to access 'Destination' database
