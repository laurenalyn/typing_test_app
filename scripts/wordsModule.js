var wordsModule = (function() {
//private
    var words = [
        "word1 word2 word3 etc",
        "word1 word2 word3 etc",
        "word1 word2 word3 etc",
    ];

//public
    return {
        getWords(textNumber) {
            return words[textNumber];
        }
    };
}());
