var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');

var command = process.argv[2];

switch(command){
	case 'my-tweets':
		tweets();
		break;
	case 'spotify-this-song':
		songSearch();
		break;
	case 'movie-this':
		movieInfo();
		break;
	case 'do-what-it-says':
		doThis();
		break;
}

function tweets(){
	var y = 0;
	var client = new Twitter(keys.twitterKeys)
	var params = {screen_name: 'RpatrkH'};
		client.get('statuses/user_timeline', params, function(error, tweets, response){
  			if (!error) {
  				console.log('========== Twitter Info: ==========');
  				console.log(' ')
  				//console.log(tweets);
  				for (i = 0; i < 20; i++){
  					y++;
    				var tweetText = tweets[i].text;
    				var tweetDate = tweets[i].created_at;
    					console.log('----------- Tweet ' + y + ' -----------');
    				console.log(tweetText);
    				console.log(tweetDate);
    				if (i < 9){
    					console.log('-------------------------------');
    				} else {
    					console.log('--------------------------------');
    				}
    				console.log(' ');
    			}
    			console.log('===================================');
  			} else {
          console.log('Error');
        }
	});
}


function songSearch(){

	var song = process.argv[3];

	if(song == null){
		song = "What's My Age Again";
	}

	spotify.search({ type: 'track', query: song }, function(err, data) {
    	if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
    	var artistName = data.tracks.items[0].artists[0].name;
    	var songName = data.tracks.items[0].name;
    	var previewLink = data.tracks.items[0].preview_url;
    	var albumName = data.tracks.items[0].album.name;
   		console.log('========== Spotify Song Info: ==========');
    	console.log(' ')
    	console.log("Artist name: " + artistName);
    	console.log("Song name: " + songName);
    	console.log("Preview Link: " + previewLink);
    	console.log("Album Name: " + albumName);
    	console.log(' ')
    	console.log('========================================');
	});

}

function movieInfo(){

	var args = process.argv.slice(3);
	var movie = args.join(" ");

	var url = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json'

	request(url, function(err, response, body){
		var body = JSON.parse(body);
		console.log('========== Movie Info: ==========');
		console.log(' ');
		console.log("Movie Title: " + body.Title);
		console.log("Year Released: " + body.Year);
		console.log("IMDB Rating: " + body.imbdRating);
		console.log("Country: " + body.Country);
		console.log("Language: " + body.Language);
		console.log("Plot: " + body.Plot);
		console.log("Actors: " + body.Actors);
		//console.log("Rotten Tomatoes Rating: " + body);
		//console.log("Rotten Tomatoes Url: " + body);
		console.log(' ');
		console.log('=================================');
	})
}

//--Does not work yet--
function doThis(){
	fs.readFile('random.txt', 'utf8', function (err,data) {
  		if (err) {
   			return console.log(err);
  		}
  			var args = data.split(',');
  			//console.log(args);
  			//console.log(args[0]);
  			//console.log(args[1]);
  			var action = args[0];
  			var value = args[1];
  			console.log(action + ' ' + value); 
  			//runDoThis(action, value);
  			//process.argv[3] = args[1];
	});
}

//var runDoThis = function(){

//}



