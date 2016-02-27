var express = require('express');
var router = express.Router();

/* Main entry point for prompt requests */
router.get('/api/1.0', function(req, res, next) {
	//Output the basic request sent from parse

  	var response = {
	   sendmms: true,
	   showauthurl: false,
	   authstate: null,
	   text: "Hello World! You said 'This is a test call!'.",
	   speech: "Hello World! You said 'This is a test call!'.",
	   status: "OK",
	   webhookreply: null,
	   images: [
	      {
	         imageurl: "http://api.dev.promptapp.io/images/random/helloworld.gif",
	         alttext: "Hello World!"
	      }
	   ]
	}

  	res.json(response);
});

module.exports = router;
