/**
 * Created by CosticaTeodor on 11/02/16.
 */

//USE OF STRICT

"use strict";//use for the whole file

/*
 Strict mode makes several changes to normal JavaScript semantics. First, strict mode eliminates some JavaScript silent
 errors by changing them to throw errors. Second, strict mode fixes mistakes that make it difficult for JavaScript engines
  to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
   Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
 */

/*function strict(){
    // Function-level strict mode syntax
    'use strict';
    function nested() { return "And so am I!"; }
    return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }

function run(){
    console.log(strict());
    console.log(notStrict());
}

run();
*/
//-----------------------------------------------

// Assuming a global variable mistypedVariable exists
//mistypedVaraible = 17; // this line throws a ReferenceError due to the
                       // misspelling of variable

//if 'use strict' was used this might have been a legal assignement;
//-----------------------------------------------

//delete Object.prototype; // throws a TypeError
//strict mode makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect):

//------------------------------------------------


//                  HOISTING
/*
 Because variable declarations (and declarations in general) are processed before any code is executed, declaring a
 variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear
 to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is
  moved to the top of the function or global code.
 */
//foo = 2
//var foo;

// is implicitly understood as:

//var foo;
//foo = 2;

/*
 hoisted(); // logs "foo"

 function hoisted() {
 console.log("foo");
 }
 */

//------------------------------------------------

