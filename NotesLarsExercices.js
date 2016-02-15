/**
 * Created by CosticaTeodor on 14/02/16.
 */
/*

2. Why var self = this;
Assign the a refrence to this so it doesn't refer to the global scope?


 var abc = 1; // we want to use this variable in embedded functions

 function xyz(){
 console.log(abc); // it is available here!
 function qwe(){
 console.log(abc); // it is available here too!
 }
 ...
 };

 This technique relies on using a closure. But it doesn't work with this because this is a pseudo variable that may
 change from scope to scope dynamically:

 // we want to use "this" variable in embedded functions

 function xyz(){
 // "this" is different here!
 console.log(this); // not what we wanted!
 function qwe(){
 // "this" is different here too!
 console.log(this); // not what we wanted!
 }
 ...
 };

 What can we do? Assign it to some variable and use it through the alias:

 var abc = this; // we want to use this variable in embedded functions

 function xyz(){
 // "this" is different here! --- but we don't care!
 console.log(abc); // now it is the right object!
 function qwe(){
 // "this" is different here too! --- but we don't care!
 console.log(abc); // it is the right object here too!
 }
 ...
 };

 3. Purpose of call(), apply(), bind()?


 */