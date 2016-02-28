var listDictionary = {

  searchforKeyword : function() {
        
  	var dict = {
  			"recipe" : ["cook", "hungry", "eat"],
  			"yelp" : ["hungry", "eat", "restaurants"],
  			"dominos" : ["pizza", "hungry", "eat"],
		};

        $.each( dict, function( key, value ) {
  			//alert( key + ": " + value );
  			console.log( "index", key, "value", value );
  			jquery.each( x, function( index, value ) {
  				//alert( index + ": " + value );
  				console.log( "index", index, "value", value );
			
				return dict[key][value];

			});
		});

		return dict["yelp"][2];
    }

}

module.exports = listDictionary;
