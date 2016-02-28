var express = require('express');
var router = express.Router();
var requestHelper = require('../utils/requestHelper');
var trumpQuotes = require('../utils/trump');
var setimentCommands = require('../utils/listDictionary');

/* Main entry point for prompt requests */
router.post('/api/1.0', function(req, res, next) {
	
	//Get the user's message
	//var message = requestHelper.getMessage(req.body);

	//Get a new trump Quote
	var quote = trumpQuotes.newQuote();

	//Return a array of commands based on input sentiment
	var commands = setimentCommands.searchforKeyword();

  	//Create a response to return to the user
  	var response = {
	   sendmms: true,
	   showauthurl: false,
	   authstate: null,
	   text: "Hello World! You said: " + commands,
	   speech: "Hello World! You said: " + commands,
	   status: "OK",
	   webhookreply: null,
	   images: [
	      {
	         imageurl: "http://api.dev.promptapp.io/images/random/helloworld.gif",
	         alttext: "Hello World!"
	      }
	   ]
	}

	//Return the json response
  	res.json(response);
});

module.exports = router;
