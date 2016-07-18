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
    image: null,
    city: "Torres del Paine",
    state: null,
    country: "Chile",
    year_visited: "2016",
    international: true,
    description:" Went on an amazing 5 day backpacking trek through the many terrains of the Torres Del  "
  },
  {
    image: null,
    city: "Santiago",
    state: null,
    country: "Chile",
    year_visited: "2016",
    international: true,
    description:" "
  },
  {
    image: null,
    city: "Vienna",
    state: null,
    country: "Austria",
    year_visited: "2015",
    international: true,
    description:" "
  },
  {
    image: null,
    city: "Venice",
    state: null,
    country: "Italy",
    year_visited: "2015",
    international: true,
    description:" "
  },
  {
    image: null,
    city: "Dubrovnik",
    state: null,
    country: "Croatia",
    year_visited: "2015",
    international: true,
    description:" "
  },
  {
    image: null,
    city: "Vancouver",
    state: null,
    country: "Canada",
    year_visited: "2015",
    international: true,
    description:" "
  },
  {
    image: null,
    city: "Zion National Park",
    state: "Utah",
    country: "US",
    year_visited: "2016",
    international: false,
    description:" "
  },
  {
    image: null,
    city: "Page (Antelope Canyon)",
    state: "Arizona",
    country: "US",
    year_visited: "2016",
    international: false,
    description:" "
  },
  {
    image: null,
    city: "Portland",
    state: "Oregon",
    country: "US",
    year_visited: "2016",
    international: false,
    description:" "
  },
  {
    image: null,
    city: "New York",
    state: "New York",
    country: "US",
    year_visited: "2015",
    international: false,
    description:" "
  },
  {
    image: null,
    city: "Seattle",
    state: "Washington",
    country: "US",
    year_visited: "2014",
    international: false,
    description:" "
  },
  {
    image: null,
    city: "Jan Thiel",
    state: null,
    country: "Curacao",
    year_visited: "2013",
    international: true,
    description:" "
  },
];

//remove "messed around" seeds of travels, refreshes back to initial db
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
