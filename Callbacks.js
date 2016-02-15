/**
 * Created by CosticaTeodor on 14/02/16.
 */

/*
 In computer programming, a callback is a piece of executable code that is passed as an argument to other code, which is
 expected to call back (execute) the argument at some convenient time. The invocation may be immediate as in a synchronous
 callback, or it might happen at later time as in an asynchronous callback. In all cases, the intention is to specify a
 function or subroutine as an entity that is, depending on the language, more or less similar to a variable. In simpler terms,
  a callback function is a function that is passed as an argument to another function and is invoked after some kind of event.
 */


//1)

//Filter:

function getLength(value){
    if(value.length<= 3){
        return value;
    }
}

var arrFilter = ["Lars","Jan","Peter","Bo","Frederick"].filter(getLength);
console.log(arrFilter);

//Map

var reformattedArray = arrFilter.map(function(obj){
    var rObj = {};
    rObj= obj.toUpperCase();
    return rObj;
});

console.log(reformattedArray);

//2)User defined functions that take callbacks as arg
// Basically the callback is used by the mother function
//The callback could be user defined and do whatever we want to when a function is called
/*myFilter(arr, callback){
    var resArr = [];
    for(var i = 0; i<= arr.length; i++){
        callback([i]);
    }
}

 function someAction(x, y, someCallback) {
 return someCallback(x, y);
 }

 function calcProduct(x, y) {
 return x * y;
 }

 function calcSum(x, y) {
 return x + y;
 }
 // alerts 75, the product of 5 and 15
 alert(someAction(5, 15, calcProduct));
 // alerts 20, the sum of 5 and 15
 alert(someAction(5, 15, calcSum));

 First a function someAction is defined with a parameter intended for callback: someCallback. Then a function that can be used as a callback to someAction is defined, calcProduct. Other functions may be used for someCallback, like calcSum. In this example, someAction() is invoked twice, once with calcProduct as a callback and once with calcSum. The functions return the product and sum, respectively, and then the alert will display them to the screen.

 In this primitive example, the use of a callback is primarily a demonstration of principle. One could simply call the
 callbacks as regular functions, calcProduct(x, y). Callbacks are generally useful when the function needs to perform
 actions before the callback is executed, or when the function does not (or cannot) have meaningful return values to act
  on, as is the case for Asynchronous JavaScript (based on timers) or XMLHttpRequest requests. Useful examples can be found
  in JavaScript libraries such as jQuery where the .each() method iterates over an array-like object, the first argument being
   a callback which is performed on each iteration.
*/