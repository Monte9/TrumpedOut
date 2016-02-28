var generateQuote = {

  newQuote: function(body) {

  	return findQuote();

  }

  findQuote : function() {
        var dict = {
  			"1" : "Make America Great Again!",
  			"2" : "I will build a great wall – and nobody builds walls better than me, believe me – and I’ll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.",
  			"3" : "You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.", 
  			"4" : "Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man – he made a good decision.",
  			"5" : "Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again – just watch. He can do much better!", 
  			"6" : "When Mexico sends its people, they’re not sending the best. They’re not sending you, they’re sending people that have lots of problems and they’re bringing those problems with us. They’re bringing drugs. They’re bring crime. They’re rapists… And some, I assume, are good people."
		};

		return dict["2"];
    }

}

module.exports = returnQuote;

