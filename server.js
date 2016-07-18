// require express and other modules
var express = require('express'),
bodyParser = require('body-parser'),
db = require('./models');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// parse incoming urlencoded form data
// and populate the req.body object

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
* DATABASE *
************/



/**********
* ROUTES *
**********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
* HTML Endpoints
*/
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
* JSON API Endpoints
*/
app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api!!",
    documentation_url: "https://github.com/tbduong/express_self_api/README.md",
    base_url: "https://enigmatic-atoll-65639.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me!"}, // CHANGE ME
      {method: "GET", path: "/api/travels", description: "Shows all (most) of the places I have traveled to"},
      {method: "GET", path: "/api/travels/:id", description: "Shows all (most) of the places I have traveled to by ID"},
      {method: "POST", path: "/api/travels/:id", description: "Add a recommended destination!"},
      {method: "PUT", path: "/api/travels/:id", description: "Edit a current travel entry by id"},
      {method: "DELETE", path: "/api/travels/:id", description: "Delete a travel entry by id"}
    ]
  });
});

//document all profile information below
app.get('/api/profile', function profile_index(req, res){
  res.json({
    name: "Tiffani Duong",
    github_link: "https://github.com/tbduong",
    profile_img: "/public/images/profile_img.jpeg",
    current_city: "San Francisco",
    ig_link: "https://www.instagram.com/t1ffduong"
  });
});

//get all travels
app.get('/api/travels', function travelIndex (req, res) {
  //find all travels in db
  db.Travel.find(function (err, allTravels){
    res.json({travels: allTravels});
  });
});

//find one travel entry by id
app.get('/api/travels/:id', function foundTravelEntry (req, res) {
  db.Travel.findById(req.params.id, function (err, travel){
    if (err) {
      return console.log("!!! ERROR for finding entry !!!!");
    }
    res.json(travel);
  });
});
//create new travel entry; this will go into travel suggestion area of page.
app.post('/api/travels', function createEntry (req, res){
  //create new travel entry with form data (req.body...)
  var newTravelEntry = new db.Travel({
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    year_visited: req.body.year_visited,
    video: req.body.video,                //attach link to vimeo.com
    image: req.body.image,                //upload local img
    international: req.body.international
  });
  console.log(newTravelEntry);
  //add newTravelEntry to Travel db
  newTravelEntry.save(function(err, newTravelEntry){
    if (err){
      return console.log("!!!!ERROR CAN'T SAVE ENTRY!!!!");
    }
    res.json(newTravelEntry);
  });
});

//edit travel entry
app.put('/api/travels/:id', function updateTravel(req,res) {
  db.Travel.findById(req.params.id, function(err, foundTravel){
    // console.log("logging the params");
    // console.log(req.params);
    // console.log("logging the body");
    // console.log(req.body);
    foundTravel.city = req.body.city;
    foundTravel.state = req.body.state;
    foundTravel.country = req.body.country;
    foundTravel.year_visited = req.body.year_visited;
    foundTravel.international = req.body.international;
    foundTravel.summary = req.body.summary; //why isn't this working
    // add newTravel to database
    foundTravel.save(function(err, updatedTravel){
      if (err) {
        return console.log("create error: " + err);
      }
      res.json(updatedTravel);
    });
  });

app.delete('/api/travels/:id', function(req, res) {
  // console.log(req.params);
  var travelId = req.params.id;
  db.Travel.findOneAndRemove({_id: travelId}, function(err, deletedTravel) {
    if (err) { res.sendStatus(410); }
    console.log('!!!You just deleted ', deletedTravel);
    res.json(deletedTravel);
  });
});

});





























/**********
* SERVER *
**********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
