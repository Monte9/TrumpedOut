var express = require('express');
var router = express.Router();

/* Main entry point for prompt requests */
router.get('/api/1.0', function(req, res, next) {
	//Output the basic request sent from parse
	console.log(req.body);
	
  res.json(req.body);
});

module.exports = router;
