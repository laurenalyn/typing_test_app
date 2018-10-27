// ==============================
// Modular Design Pattern
// ==============================

// Creates an IIFE (immediately invoked function expression)
var myModule =  (function() {
    //private variables and functions
    var x = 1;
        //creates a private object with 2 key value pairs
    var car = {
        make: 'Audi',
        model: 'A3'
    };

    //public variable and functions

    // returns an object with a key called f1 and its value is a function that returns x
    return {
        f1: function() {
            return x;
        },
        f2: function() {
            return car;
        }
    };
})();
// calls myModule and invokes the key's(f1) function
console.log(myModule.f1());
// calls myModule and involes the f2 function
console.log(myModule.f2());
// changes the value of the model
myModule.f2().model = 'A6';
// calls the updated module function
console.log(myModule.f2());
// ==============================*/
