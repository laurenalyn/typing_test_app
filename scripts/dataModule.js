// private
/* ==================================================
Indicators/ Test Control & Test Results
================================================== */
// var indicators = {testStarted: false, testEnded: false, totalTestTime: 0, timeLeft: 0,};
// var results = {wpm: 0, wpmChange: 0, cpm: 0, cpmChange: 0, accuracy: 0, accuracyChange: 0,};
var appData = {
    indicators: {testStarted: false, testEnded: false, totalTestTime: 0, timeLeft: 0,},
    results: {wpm: 0, wpmChange: 0, cpm: 0, cpmChange: 0, accuracy: 0, accuracyChange: 0,}
    words: {currentWordIndex: 0},
};

// public
var dataModule = (function() {
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
    };

}());