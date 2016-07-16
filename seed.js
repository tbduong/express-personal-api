// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models'); //requires models folder to access ALL models

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var travels_list = [
  {
    city: "Torres del Paine",
    state: null,
    country: "Chile",
    year_visited: 2016,
    video: String,      //attach link to vimeo.com
    image: String,      //upload local img
    international: true
  }
];

db.Travel.save(travels_list, function(err, travel){
  if (err){
    return console.log("Error:", err);
  }
  console.log("travels saved!");
});
