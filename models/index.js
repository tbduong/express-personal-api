var mongoose = require("mongoose");
 mongoose.connect( process.env.MONGODB_URI || "https://enigmatic-atoll-65639.herokuapp.com/" );

// module.exports.Campsite = require("./campsite.js.example");
