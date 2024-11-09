
/// 1 ////

//// promises //// 

// 1. Pending
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'), 1000);
});
console.log(promise);  

// 2. Fulfilled
promise.then(value => console.log(value)); 

let rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject('Something went wrong!'), 1000);
});

// 3. Rejected
rejectedPromise.catch(error => console.error(error));