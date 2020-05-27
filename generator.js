const function1 = () => "I am function one"
const function2 = () => "I am function 2"
const function3 = () => "I am function 3"
const function4 = () => "I am function 4"


function* generatorFunction() {
    yield function1();
    yield function2();
    yield function3();
    yield function4();
}

const generatorObject = generatorFunction();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());