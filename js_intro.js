//Class 1 Start


/*  
1. Nodejs - Fast

2. why nodejs fast ?
    asynchronous
    non-blocking
    
3. cross platform
4. v8 engine
5. Folder structure
6. package.json file advantages
7. functions and return keyword
8.anonymous function
9 how to start and run the project.

*/
console.log("this is testing");


console.log(test(2, 3));
function test(a, b) {
    return a + b;
};


var a = function (a, b) {
    return a + b;
}

console.log(a(2, 3))

// Class 1 Ending


//  Class 2 Start

//Data types
var string_val = "sfsdfsdfsdfsdf";
var number_val = 1;
var boolean = true;
var float = 1.544
var obj = { name: "test", age: "20" };
var arr = [1, 2, "asd", { name: "test" }];
var arr_of_obj_json = [
    {
        name: "test"
    },
    {
        name: "test2"
    }
]

//Callback

/* Arrow function */

var normal_fun = function () {
    return "i am normal function"
}
normal_fun()

var arrow_function = () => {
    return " i am arrow function"
}

arrow_function()