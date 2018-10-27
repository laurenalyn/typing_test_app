// ==============================
// Modular Design Pattern
// ==============================

// Creates an IIFE (immediately invoked function expression)
var myModule =  (function() {
    //private variables and functions
    var x = 1;


    //public variable and functions

    // returns an object with a key valled f1 and its value is a function that returns x
    return {
        f1: function() {
            return x;
        }
    };
})();
// calls myModule and invokes the key's function
console.log(myModule.f1());
// ==============================*/
