/**
 * Created by CosticaTeodor on 14/02/16.
 */


/*
Definition:
 An immediately-invoked function expression (or IIFE, pronounced "iffy"[1]) is a JavaScript design pattern which produces
 a lexical scope using JavaScript's function scoping.

Template:
 (function() {
 the code here is executed once in its OWN scope
 })();

Purpose of IIFE

-used to avoid variable hoisting from within blocks
-protect against polluting the global environment
-simultaneously allow public access to methods while retaining privacy for variables defined within the function

Example 1

 Evaluation context
 A lack of block scope means that variables defined inside, for example, a for loop will have their definition "hoisted"
  to the top of the enclosing function. Evaluating a function which depends on variables modified by the outer function
  (including by iteration) can be difficult. We can see this without a loop if we update a value between defining and invoking
  the function.[11]

 var v, getValue;
 v = 1;
 getValue = function() { return v; };
 v = 2;

 getValue(); // 2

 Here the function passes v as an argument and is invoked immediately, preserving the inner function's execution context:

 var v, getValue;
 v = 1;
 getValue = (function(x) {
 return function() { return x; };
 })(v);
 v = 2;

 getValue(); // 1

 Example 2

 Establishing private variables and accessors

 IIFEs are also useful for establishing private methods for accessible functions while still exposing some properties for later use.

 var counter = (function(){
 var i = 0;

 return {
 get: function(){
 return i;
 },
 set: function( val ){
 i = val;
 },
 increment: function() {
 return ++i;
 }
 };
 })();

 // 'counter' is an object with properties, which in this case happen to be
 // methods.

 counter.get(); // 0
 counter.set( 3 );
 counter.increment(); // 4
 counter.increment(); // 5

 If we attempt to access counter.i from the global environment, it will be undefined as it is enclosed within the invoked
 function and is not a property of counter. Likewise, if we attempt to access i it will result in an error as we have not
 declared i in the global environment
 */
