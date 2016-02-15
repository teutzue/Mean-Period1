/**
 * Created by CosticaTeodor on 14/02/16.
 */

/*
 Inheritance with the prototype chain

 JavaScript objects are dynamic "bags" of properties (referred to as own properties).
  JavaScript objects have a link to a prototype object. When trying to access a property of an
  object, the property will not only be sought on the object but on the prototype of the object,
  the prototype of the prototype, and so on until either a property with a matching name is found or
  the end of the prototype chain is reached.
 */

//Link: https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

//Teo example
function createAnimal (name,age,dead){
    this.dead = dead;
    this.name = name;
    this.age = age;
    this.info = function(){
        return this.dead + this.age + this.name;
    }
}

var dog = new createAnimal("Dog","10",false);
createAnimal.prototype.roar = function(){
    console.log("ROAR!")
}

createAnimal.prototype.fromPrototype = "I am from the prototype!";

dog.roar();
console.log(dog.fromPrototype);

