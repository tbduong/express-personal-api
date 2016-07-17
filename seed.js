// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models'); //requires models folder to access ALL models.

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
    image: null,
    international: true
  },
  {
    city: "Santiago",
    state: null,
    country: "Chile",
    year_visited: "2016",
    image: null,
    international: true
  },
  {
    city: "Vienna",
    state: null,
    country: "Austria",
    year_visited: "2015",
    image: null,
    international: true
  },
  {
    city: "Venice",
    state: null,
    country: "Italy",
    year_visited: "2015",
    image: null,
    international: true
  },
  {
    city: "Dubrovnik",
    state: null,
    country: "Croatia",
    year_visited: "2015",
    image: null,
    international: true
  },
  {
    city: "Vancouver",
    state: null,
    country: "Canada",
    year_visited: "2015",
    image: null,
    international: true
  },
  {
    city: "Zion National Park",
    state: "Utah",
    country: "US",
    year_visited: "2016",
    image: null,
    international: false
  },
  {
    city: "Page (Antelope Canyon)",
    state: "Arizona",
    country: "US",
    year_visited: "2016",
    image: null,
    international: false
  },
  {
    city: "Portland",
    state: "Oregon",
    country: "US",
    year_visited: "2016",
    image: null,
    international: false
  },
  {
    city: "New York",
    state: "New York",
    country: "US",
    year_visited: "2015",
    image: null ,
    international: false
  },
  {
    city: "Seattle",
    state: "Washington",
    country: "US",
    year_visited: "2014",
    image: null ,
    international: false
  },
  {
    city: "Jan Thiel",
    state: null,
    country: "Curacao",
    year_visited: "2013",
    image: null ,
    international: true
  },
  ];

  //remove "messed around" seeds of travels
  db.Travel.remove({}, function(err, savedTravels) {
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

  //
