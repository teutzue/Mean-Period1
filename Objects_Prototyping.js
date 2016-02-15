/**
 * Created by CosticaTeodor on 14/02/16.
 */

    //Object.prototype.hasOwnProperty()

/*
 All objects in JavaScript are descended from Object; all objects inherit methods and properties from Object.prototype,
 although they may be overridden (except an Object with a null prototype, i.e. Object.create(null)). For example, other
  constructors' prototypes override the constructor property and provide their own toString() methods. Changes to the Object
   prototype object are propagated to all objects unless the properties and methods subject to those changes are overridden
   further along the prototype chain.

 Adding Properties and Methods to Objects later or can be added in the constructor
 */


    //1)
var obj = {
    name:"Teodor",
    birthdate:"30/04/1995",
    hobby:"programming",
    email:"youdWish@no.bye"
}
    //3 ways of iterating a)
for(var prop in obj){
    console.log("Before deletion:");
    console.log(obj.name+ " " +obj.birthdate + " " + obj.hobby + " " + obj.email)
    delete obj['birthdate']
    console.log("After deletion:");
    console.log(obj.name+ " " +obj.birthdate + " " + obj.hobby + " " + obj.email)
    if(obj.hasOwnProperty(obj.birthdate)){
        console.log(obj.name+ " " +obj.birthdate + " " + obj.hobby + " " + obj.email)
    }else{
        console.log(obj.name+ " "+ obj.hobby + " " + obj.email)
    }
    break;
}
// b)
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// c)
var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); // logs '0,1,2,length'

// Array-like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); // logs '0,1,2'

// Logging property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
    console.log(val + ' -> ' + obj[val]);
});
// logs
// 0 -> a
// 1 -> b
// 2 -> c

//2)Constructor function to create Persons

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.show = function(){
        console.log(this.age);
    }
}

    var Teo = new person("Teodor","Costica",20,"Brown");
    Teo.show();

//3)Done at 1