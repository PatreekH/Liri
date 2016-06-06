var keys = require('./keys.js');
var Twitter = require('twitter');

var command = process.argv[2];

switch(command){
	case 'my-tweets':
		tweets();
		break;
	case 'spotify-this-song':
		//function
		break;
	case 'movie-this':
		//function
		break;
	case 'do-what-it-says':
		//function
		break;
}

function tweets(){
	var client = new Twitter(keys.twitterKeys)
	var params = {screen_name: 'lil_schor'};
		client.get('statuses/user_timeline', params, function(error, tweets, response){
  			if (!error) {
  				console.log('========== Twitter Info: ==========')
  				for (i = 0; i < 20; i++){
    				var tweetText = tweets[i].text;
    				var tweetDate = tweets[i].created_at;
    				console.log('----------')
    				console.log(tweetText);
    				console.log(tweetDate)
    				console.log('----------')
    			}
  			}
	});
}