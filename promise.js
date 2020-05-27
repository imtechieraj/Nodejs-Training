// var promise = new Promise(function (resolve, reject) {
//     reject("this is errr");
// });


// promise.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// });

// var add = (a, b) => {
//     return new Promise(function (resolve, reject) {
//         if (typeof a === "number" && typeof b === "number") {
//             resolve(a + b)
//         } else {
//             reject("this is not number")
//         }
//     });
// }

// add("five", 2).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })
/*
1.create a new promise
2. passing a callback function
3. There are two methos
        -resolve - (success)
        -reject - (err)
4. sucess result - then
    error - catch
*/

/* Promise ALL Start*/


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

/* Promise ALL End*/

/* Promise Race Start*/


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });

// setInterval(() => {
//     console.log("hi")
// }, 3000);

// setTimeout(()=>{
//     console.log("hi")
// },2000)

// setImmediate(()=>{
//     console.log("hi")
// })