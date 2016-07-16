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
    year_visited: "2016",
    video: null,      //attach link to vimeo.com
    image: null,      //upload local img
    international: true
  },
  {
    city: "Seattle",
    state: "Washington",
    country: "US",
    year_visited: "2014",
    video: null,      //attach link to vimeo.com
    image: null,      //upload local img
    international: false}
  ];

  //remove "messed around seeds" travels
  db.Travel.remove({}, function(err, travels) {
    if (err) {
      console.log("!!! ERROR OCCURED IN REMOVAL !!!", err);
    } else {
      console.log("!!! Removed all travel entries !!!");
    }
    db.Travel.create(travels_list, function(err, savedTravels){
      if (err){
        return console.log("!!!!!!!Error:", err);
      }
      console.log("Created" + savedTravels);
      process.exit();
    });
  });
