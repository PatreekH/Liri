var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');

var command = process.argv[2];

switch(command){
	case 'my-tweets':
		tweets();
		break;
	case 'spotify-this-song':
		songSearch();
		break;
	case 'movie-this':
		//movieInfo();
		break;
	case 'do-what-it-says':
		//function
		break;
}

function tweets(){
	var client = new Twitter(keys.twitterKeys)
	var params = {screen_name: 'RpatrkH'};
		client.get('statuses/user_timeline', params, function(error, tweets, response){
  			if (!error) {
  				console.log('========== Twitter Info: ==========');
  				for (i = 0; i < 20; i++){
    				var tweetText = tweets[i].text;
    				var tweetDate = tweets[i].created_at;
    				console.log('-----------Tweet ' + i + '-----------')
    				console.log(tweetText);
    				console.log(tweetDate)
    				console.log('------------------------------')
    			}
    			console.log('===================================');
  			}
	});
}


function songSearch(){

	var song = "what's my age again" 
	//process.argv[3];

	spotify.search({ type: 'track', query: song }, function(err, data) {
    	if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
   		console.log('========== Spotify Song Info: ==========');
    	var artistName = data.tracks.items[0].artists.name;
    	var songName = data.tracks.items[0].name;
    	var previewLink = data.tracks.items[0].preview_url;
    	var albumName = data.tracks.items[0].album.name;

    	//var tweetDate = tweets[i].created_at;
    	console.log(' ')
    	console.log("Artist name: " + artistName);
    	console.log("Song name: " + songName);
    	console.log("Preview Link: " + previewLink);
    	console.log("Album Name: " + albumName);
    	//console.log(data.tracks.items[0]);
    	console.log(' ')
    	//console.log(data);
    	console.log('========================================');
	});

}