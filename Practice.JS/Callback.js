// callback function 1

// function greet(name) {
//     console.log('Hi' + ' ' + name);
// }
// greet('Peter');

// //function 2// //

// function processData(input, callback) {
//     return callback(input);
// }
// function toUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(processData("hello world", toUpperCase)); 

// //function 3// //

function fetchData(callback) {
    setTimeout(() => {
      const data = { name: "John Doe", age: 30 };
      callback(data);
    }, 2000);
  }
  function processData(data) {
    console.log("Data:", data);
  }
  fetchData(processData);