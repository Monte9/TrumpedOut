var listDictionary = {

  searchforKeyword : function() {
        var dict = {
  			"recipe" : ["cook", "hungry", "eat"],
  			"yelp" : ["hungry", "eat", "restaurants"],
  			"dominos" : ["pizza", "hungry", "eat"],
		};

		return dict["recipe"][1];
    }

}

module.exports = listDictionary;
