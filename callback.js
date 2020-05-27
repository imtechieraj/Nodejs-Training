var add = function (a, b, Callback) {
    if (typeof a === "number" && typeof b === "number") {
        Callback(null, a + b)
    } else {
        Callback("Parameters are not a number")
    }
}

var callback_fun = function (error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
}

console.log(add(1, 2, callback_fun))


/* Callback conditions:
    1. Function creation
    2. function having two parameters.
    3. these paramers are error and result
    4. passing the function as a prameter
    5. Error message is passing a first parameter
    6. success result is passing a first parameter value is null,result
*/