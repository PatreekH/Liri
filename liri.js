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

