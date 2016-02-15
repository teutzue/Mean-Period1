/**
 * Created by CosticaTeodor on 15/02/16.
 */
/*
 GENERAL
 --------
 If you write a peace of code that could be used by other projects
 in the future, you can store this module and reuse it.
 USAGE
 -------
 When you import (require() )  it you can assign the returned object to a variable
 and use it again and again.
 Note!
 -----
 if you are importing a local file you should type the local folder literal before you files name
 like this : require("./myFile.js");
 THIS EXAMPLE!!!!
 ---------------------
 In this example I will make a reusable module in this file and require it in
 file 10_part2.js
 */

//       -----------------
//       ----EXAMPLES-----
//       -----------------


function myHiddenFunction(a,b){
    return a+b;
}
var exports = module.exports = {
    addTwoNumbers: function (a, b) {
        return myHiddenFunction(a, b);
    },
    addManyPublic: function (a) {
        var sum =0;
        a.forEach(function(item){
            sum += item;
        })
        return sum;
    },
    sayHello: function () {
        console.log( "hello from the module");
    },
};

/*
 Yes I know this is not the best or most usefull
 methods but they will do the job.
 in this case the function 'myHiddenFunction'
 can not be accessed from the implementor so it is kinda of
 private and I say again kind of!!!
 */