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
    image: "images/patagonia.jpg",
    city: "Torres del Paine",
    state: null,
    country: "Chile",
    year_visited: "2016",
    summary:" Went on an amazing 5 day backpacking trek through the many terrains of the Torres Del Paine national park. A beautiful wonder of the world that stretches between the beautiful neighboring South American countries of Chile and Argentina. Living 5 days out of a 25lb backpack is no joke, but ended up being one of the greatest experiences of my life. Unpredictable weather, beautiful blue glaciers, and enormous mountains, make for this trek to be a must see in your life. Hiking up 4hours to the final Torres (towers) never felt so good."
  },
  {
    image: "/images/santiago.jpg" ,
    city: "Santiago",
    state: null,
    country: "Chile",
    year_visited: "2016",
    summary:"Before and after I was able to do the beautiful trek of Torres del Paine, I had the opportunity to explore the giant metrpolis that is Santiago. Chile is an extremely long country with so much beautiful land... and yet somehow 60% of all chilean people live in the heart of Santiago. Wondrous food, entertainment, nightlife, and art is sprinkled all over the streets, giving this metropolitan area a cultural, laxed, and latin feel....did I mention again that the food is amazing?!"
  },
  {
    image: "/images/vienna.jpeg",
    city: "Vienna",
    state: null,
    country: "Austria",
    year_visited: "2015",
    summary:"Vienna, Austria... the heart of everything art, ballet, and classical iconic music. Vienna was one of the countries I visited during my 2.5 week stunt in Europe... the other two being the following countries after. Austrian culture thrives in their art, beautiful architecture, and the magnificent and rich history that all of Austria prides itself in. Not to mention the hometown of the famous Mozart. Austria has a sense of historic flare, mixed in with their modern contemporary nightlife and buildings. Let's not forget about the delicious brew and bratwurst stands that scattered the city. "
  },
  {
    image: "/images/venice.jpeg",
    city: "Venice",
    state: null,
    country: "Italy",
    year_visited: "2015",
    summary:"Gondolas, romance, sunsets.... pizza, cannolis, lasagna, and pasta... need I say more? "
  },
  {
    image: "/images/croatia.jpeg",
    city: "Dubrovnik",
    state: null,
    country: "Croatia",
    year_visited: "2015",
    summary:"King Landing (queue Game of Thrones theme). This magnificent old town may not be very large, but you can bet yourself that you will be intrigued by the beautiful views of the town and the ocean while scaling the fort walls. Croatia can have gloomy and storms during the winters, but the summers are beuatiful, filled with fun water sports, ridiculously blue water, and DJ pool parties all around the top of the forts. It has never been known as a great vacay spot, but thanks to Game of Thrones, this country is getting the recognition it needs. "
  },
  {
    image: "/images/vancouver.jpg",
    city: "Vancouver",
    state: null,
    country: "Canada",
    year_visited: "2015",
    summary:" "
  },
  {
    image: "/images/zion.jpeg",
    city: "Zion National Park",
    state: "Utah",
    country: "US",
    year_visited: "2016",
    summary:"Beautiful redstone hikes. The most breathtaking part... being able to make it up to Angel's Landing, a magnificent view following hiking up to 1000ft elevation!"
  },
  {
    image: "/images/ny.jpeg",
    city: "New York",
    state: "New York",
    country: "US",
    year_visited: "2015",
    summary:"Spent NY during the terrible blizzard weekend and was stranded for 4 days... but completely worth it. No lines anywhere to the highest skyscrapers, no lines for the best restaurants... and we can never forget about the delicious Halal guys food stand... which does not even close, even during terrible weather conditions."
  },
  {
    image: "/images/seattle.jpeg",
    city: "Seattle",
    state: "Washington",
    country: "US",
    year_visited: "2014",
    summary:"Great food, great coffee, great people... Seattle is a charming city filled with copious parks, views, and not to mention the best clam chowdahhh in Pikes Place."
  },
  {
    image: "/images/curacao.jpeg",
    city: "Jan Thiel",
    state: null,
    country: "Curacao",
    year_visited: "2013",
    summary:"Known as one of the ABC islands in the Caribbean (the others being Aruba and Barbados), Curacao is the lesser known island, that holds a wonderful charm. Filled with wonderful seafood, secret beaches, and snorkel spots, Curacao can be a place of relaxation or adventure. It is not a very large island, but there is plenty to do there (all of which will give you a wonderful tan!). "
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
