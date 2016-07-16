var mongoose = require("mongoose");
 mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

module.exports.Travel = require("./travels.js");
// module.exports.Campsite = require("./campsite.js.example");
