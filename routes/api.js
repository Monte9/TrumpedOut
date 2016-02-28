var express = require('express');
var router = express.Router();
var requestHelper = require('../utils/requestHelper');
var trumpQuotes = require('../utils/trump');

/* Main entry point for prompt requests */
router.post('/api/1.0', function(req, res, next) {
	
	//Get the user's message
	//var message = requestHelper.getMessage(req.body);

	//Get a new trump Quote
	var quote = trumpQuotes.newQuote();

  	//Create a response to return to the user
  	var response = {
	   sendmms: true,
	   showauthurl: false,
	   authstate: null,
	   text: "Hello World! You said: " + quote,
	   speech: "Hello World! You said: " + quote,
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
