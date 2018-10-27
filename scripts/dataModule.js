var dataModule = (function() {

// private
/* ==================================================
Indicators/ Test Control & Test Results
================================================== */
// var indicators = {testStarted: false, testEnded: false, totalTestTime: 0, timeLeft: 0,};
// var results = {wpm: 0, wpmChange: 0, cpm: 0, cpmChange: 0, accuracy: 0, accuracyChange: 0,};
    var appData = {
        indicators: {
            testStarted: false, 
            testEnded: false,
            totalTestTime: 0,
            timeLeft: 0,
        },
        
        results: {
            wpm: 0,
            wpmChange: 0,
            cpm: 0,
            cpmChange: 0,
            accuracy: 0,
            accuracyChange: 0,
        },

        words: {
            currentWordIndex: 0,
            testWords: [],
            currentWord: {
                value: {
                    correct: '',
                    user: '',
                },
            },
        },
    };
    var word = function(){}; //word constructor
    word.prototype.update = function(value) {}; //update method

// public

    return {
    //Indicator - Test Control 
    setTestTime: function(x) {}, //sets the total test time to x
    initializeTimeLeft: function() {}, //initializes time left to the total test time
    startTest: function() {}, //starts the test
    endTest: function() {}, //ends the test
    reduceTime: function() {}, //reduces the time by one second
    timeLeft: function() {}, //checks if there is time left to continue the test
    testEnded: function() {}, //check if the test has already ended
    testStarted: function() {}, // check if the test has started
    // Typing Test Results
    calculateWpm: function() {}, //calculates wpm and wpmChange and updates them in appData
    calculateCpm: function() {}, //calculates cpm and cpmChange and updates them in appData
    calculateAccuracy: function() {}, //calculates accuracy and accuracyChange and updates them in appData
    // Test Words
    fillListOfTestWords: function(textNumber) {}, //fills words.testWords
    getListOfTestWords: function() {}, //get list of test words words.testWords
    moveToNewWord: function() {}, //updated current word by creating a new instance of the word class
    updateCurrentWord: function(value) {}, //updae current word using user input
    };
}());