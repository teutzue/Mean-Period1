/**
 * Created by CosticaTeodor on 14/02/16.
 */


/*
 Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure
 'remembers' the environment in which it was created.

 A closure is a special kind of object that combines two things: a function, and the environment in which that function
 was created. The environment consists of any local variables that were in-scope at the time that the closure was created.
  In this case, myFunc is a closure that incorporates both the displayName function and the "Mozilla" string that existed
  when the closure was created.

 closure, which provides privacy and state throughout the lifetime of our application.
 */


/*function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
*/
/*
 The shared environment is created in the body of an anonymous function, which is executed as soon as it has been defined.
  The environment contains two private items: a variable called privateCounter and a function called changeBy. Neither of
   these private items can be accessed directly from outside the anonymous function. Instead, they must be accessed by the
    three public functions that are returned from the anonymous wrapper.
 */
/*
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
/*counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
/*counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
/*alert(counter2.value()); /* Alerts 0 */

/*
            Module pattern: https://toddmotto.com/mastering-the-module-pattern

 Uses IIFE: It declares a function, which then calls itself immediately. These are also known as Immediately-Invoked-Function-Expressions’s,
  in which the function creates new scope and creates “privacy”. JavaScript doesn’t have privacy, but creating new scope emulates
  this when we wrap all our function logic inside them. The idea then is to return only the parts we need, leaving the other code
  out of the global scope.

 var Module = (function () {
 // code
 })();

 We then have Module declared in the global scope, which means we can call it wherever we like, and even pass it into another Module.

 var Module = (function () {

 var privateMethod = function () {
 // do something
 };

 })();

 The above example declares our function privateMethod, which is locally declared inside the new scope. If we were to
 attempt calling it anywhere outside of our module, we’ll get an error thrown and our JavaScript program will break! We
 don’t want anyone to be able to call our methods, especially ones that might manipulate data and go back and forth to a server.

 */




var testModule = (function () {

    var obj = {name:"teo", age:0}
    return {

        setName: function (name) {
            return this.name = name;
        },

        setAge: function (age) {
            this.age = age;
        },

        getInfo: function(){
            console.log(this.age + this.name);
        }
    };

})();

testModule.setName("Teo");

testModule.setAge(12);
testModule.getInfo();

//NOT REALY SURE, check again!