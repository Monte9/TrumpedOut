var generateQuote = {

  findQuote : function() {
        var dict = {
  			"1" : "Make America Great Again!",
  			"2" : "I will build a great wall – and nobody builds walls better than me, believe me – and I’ll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.",
  			"3" : "You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.", 
  			"4" : "Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man – he made a good decision.",
  			"5" : "Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again – just watch. He can do much better!", 
  			"6" : "When Mexico sends its people, they’re not sending the best. They’re not sending you, they’re sending people that have lots of problems and they’re bringing those problems with us. They’re bringing drugs. They’re bring crime. They’re rapists… And some, I assume, are good people.",
        "7" : "An ‘extremely credible source’ has called my office and told me that Barack Obama’s birth certificate is a fraud.",
        "8" :  "Our great African-American President hasn’t exactly had a positive impact on the thugs who are so happily and openly destroying Baltimore.",
        "9" : "If I were running ‘The View’, I’d fire Rosie O’Donnell. I mean, I’d look at her right in that fat, ugly face of hers, I’d say ‘Rosie, you’re fired.",
        "10" : "All of the women on The Apprentice flirted with me – consciously or unconsciously. That’s to be expected.",
        "11" : "One of they key problems today is that politics is such a disgrace. Good people don’t go into government.",
        "12" : "The beauty of me is that I’m very rich.",
        "13" : "It’s freezing and snowing in New York – we need global warming!",
        "14" : "I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.",
        "15" : "My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.",
        "16" : "I have never seen a thin person drinking Diet Coke.",
        "17" : "I think the only difference between me and the other candidates is that I’m more honest and my women are more beautiful.",
        "18" : "You’re disgusting.",
        "19" : "The point is, you can never be too greedy.",
        "20" : "Sorry, there is no STAR on the stage tonight!",
        "21" : "My Twitter has become so powerful that I can actually make my enemies tell the truth.",
        "22" : "My IQ is one of the highest — and you all know it! Please don't feel so stupid or insecure; it's not your fault",
        "23" : "I have so many fabulous friends who happen to be gay, but I am a traditionalist.",
        "24" : "The other candidates — they went in, they didn’t know the air conditioning didn’t work. They sweated like dogs...How are they gonna beat ISIS? I don’t think it’s gonna happen."
		};

    var randomNumber = Math.floor((Math.random() * 24) + 1);

		return dict[randomNumber];
    },

    newQuote: function(body) {

    return this.findQuote();

  }

}

module.exports = generateQuote;