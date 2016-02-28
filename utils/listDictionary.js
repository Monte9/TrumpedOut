var listDictionary = {

  searchforKeyword : function() {
        var dict = {
  			"recipe" : ["cook", "hungry", "eat"],
  			"yelp" : ["hungry", "eat", "restaurants"],
  			"dominos" : ["pizza", "hungry", "eat"],
		};

		return dict["recipe"];
    }

}

module.exports = listDictionary;
