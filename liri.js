// Read and set environment variables
require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var searchItem = "";

for (i = 3; i < process.argv.length; i++) {
    searchItem += (process.argv[i] + " ");
}

switch (command) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhat();
        break;
    default:
        break;
};

function concertThis() {
    request("https://rest.bandsintown.com/artists/" + searchItem + "/events?app_id=codingbootcamp", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("This band is playing at: " + JSON.parse(body)[0].venue.name + ", " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region);
            console.log(moment(JSON.parse(body)[0].datetime).format('MM/DD/YYYY'));
        }
    });
};

function spotifyThis() {
    if (!searchItem) {
        searchItem = "the sign"
    }
    spotify.search({ type: "track", query: searchItem }, function(err, response) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(JSON.stringify(response.tracks.items[0].album.name)); 
      });
};

function movieThis() {
    if (!searchItem) {
        var searchItem = "mr nobody"
    }
    request("https://rest.bandsintown.com/artists/" + searchItem + "/events?app_id=codingbootcamp", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        }
    });
};

function doWhat() {
    var dataArr;
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
          }
          dataArr = data.split(",");
    })
    spotifyThis();
};