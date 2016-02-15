/**
 * Created by CosticaTeodor on 14/02/16.
 */

//                    THIS in JAVASCRIPT
//Global context
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

//Function context

//If behaves differently depending if it's on strict mode or not

//1st example
function f1(){
    return this;
}

f1() === window; // global object

//In this case, the value of this is not set by the call. Since the code is not in strict mode,
// the value of this must always be an object so it defaults to the global object.

//2nd example
function f2(){
    "use strict"; // see strict mode
    return this;
}

f2() === undefined;
//In strict mode, the value of this remains at whatever it's set to when entering the execution context. If it's not defined,
// it remains undefined. It can also be set to any value, such as null or 42 or "I am not this".

/*
 When a function is called as a method of an object, its this is set to the object the method is called on.
 In the following example, when o.f() is invoked, inside the function this is bound to the o object.
 */

//3rd example

var o = {
    prop: 37,
    f: function() {
        return this.prop;
    }
};

console.log(o.f()); // logs 37

/*
 Similarly, the this binding is only affected by the most immediate member reference.
 In the following example, when we invoke the function, we call it as a method g of the object o.b.
 This time during execution, this inside the function will refer to o.b. The fact that the object is
 itself a member of o has no consequence; the most immediate reference is all that matters.
 */

//4th example

o.b = {g: independent, prop: 42};
console.log(o.b.g()); // logs 42

/*
 As a constructor

 When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.
 */

//5 th example

function C2(){
    this.a = 37;    //usage as constructor
    return {a:38}; // this. a gets executed but discarded at the end
}

o = new C2();
console.log(o.a); // logs 38

//CALL and APPLY
/*
 Where a function uses the this keyword in its body, its value can be bound to a particular object in the
 call using the call or apply methods that all functions inherit from Function.prototype.
 */

function add(c, d){
    return this.a + this.b + c + d;
}

var o = {a:1, b:3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

/*
 The bind method

 ECMAScript 5 introduced Function.prototype.bind. Calling f.bind(someObject) creates a new function with the same body
 and scope as f, but where this occurs in the original function, in the new function it is permanently bound to the first
  argument of bind, regardless of how the function is being used.
 */

function f(){
    return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var o = {a:37, f:f, g:g};
console.log(o.f(), o.g()); // 37, azerty

/*
 1.How this in js differs from this in Java?

 "This" in java has limited functionality (I would say):
 Within an instance method or a constructor, this is a reference to the current object
 — the object whose method or constructor is being called.
 The most common reason for using the this keyword is because a field is shadowed by a method or constructor parameter.

 Javascript takes "this" and extends the functionality:

 In most cases, the value of this is determined by how a function is called. It can't be set by assignment during
 execution, and it may be different each time the function is called. ES5 introduced the bind method to set the value
 of a function's this regardless of how it's called, and ECMAScript 2015 introduced arrow functions whose this is
 lexically scoped (it is set to the this value of the enclosing execution context).

 NOT FINISHED >> Need to go deeper!
 */