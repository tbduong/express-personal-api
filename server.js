// require express and other modules
var express = require('express'),
 bodyParser = require('body-parser'),
         db = require('./models');

var app = express();

// parse incoming urlencoded form data
// and populate the req.body object

app.use(bodyParser.urlencoded({ extended: true }));

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
      {method: "GET", path: "/api/destinations", description: "Shows all of the places I would love to visit"},
      {method: "POST", path: "/api/destinations", description: "Add a recommended destination!"}
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
app.get('/api/travels', function (req, res) {
    //send all travels as JSON response
    db.Travel.find(function TravelsListed(err, allTravels){
        res.json({travels: allTravels});
    });




});



























/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
