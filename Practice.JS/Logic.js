
///// Practice and logic Bilding in javascript /////

//questions 1//

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


//questions 2//

// let rows = 5;
// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//    for (let space = 1; space <= rows - n; space++) {
//       pattern += " ";
//    }
//    for (let num = 1; num <= 2 * n - 1; num++) {
//       pattern += "*";
//    }
//    pattern += "\n";
// }
// console.log(pattern);

////questions 3////

// let rows = 5;
// let variable = 1;
// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       // console.log(num);
//       pattern += variable+" ";
//       variable++;
//    }
//    pattern += "\n";
// }
// console.log(pattern);

////questions 4////

// let rows = 5;
// let pattern = "";
// for (let n = 1; n <= rows; n++) {
//    for (let space = 1; space <= rows - n; space++) {
//       pattern += " ";
//    }
//    for (let num = 1; num <= n; num++) {
//       pattern += "*";
//    }
//    pattern += "\n";
// }
// console.log(pattern);

////questions 5////

// let rows = 5;

// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       if (num === 1 || num === n || n === rows) pattern += "*";
//       else {
//          pattern += " ";
//       }
//    }
//    pattern += "\n";
// }
// console.log(pattern);



////questions 6////

// let rows = 5;
// let char1 = "*";
// let char2 = "*";
// let pattern = "";
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= 6 - n; num++) {
//       pattern += char1;
//    }
//    pattern += "\n";
// }
// pattern += "\n";

// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += char2;
//    }
//    pattern += "\n";
// }

// console.log(pattern);

////questions 7 ////

// const reversePyramid = (input) => {
//    let patternCapturer = "";

//    for (let i = 0; i < input; i++) {
//      for (let j = 0; j < i; j++) {
//        patternCapturer += " ";
//      }
//      for (let k = 0; k < 2 * (input - i) - 1; k++) {
//        patternCapturer += "*";
//      }
//      patternCapturer += "\n";
//    }
//    console.log(patternCapturer);
//  };

//  reversePyramid(5);

////questions 8 ////

// const rightArrowPattern = (input) => {
//   let patternCapturer = "";
//   for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= i; j++) {
//       patternCapturer += "* ";
//     }
//     patternCapturer += "\n";
//   }
//   for (let i = 1; i < input; i++) {
//     for (let j = input - 1; j >= i; j--) {
//       patternCapturer += "* ";
//     }
//     patternCapturer += "\n";
//   }
//   console.log(patternCapturer);
// };
// rightArrowPattern(5);

////questions 9 ////

// const printDiamond = (input) => {
//   let patternCapturer = "";
//   for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= input - i; j++) {
//       patternCapturer += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       patternCapturer += "*";
//     }
//     patternCapturer += "\n";
//   }
//   for (let i = 0; i < input; i++) {
//     for (let j = 0; j < i; j++) {
//       patternCapturer += " ";
//     }
//     for (let k = 0; k < 2 * (input - i) - 1; k++) {
//       patternCapturer += "*";
//     }
//     patternCapturer += "\n";
//   }
//   console.log(patternCapturer);
// };

// printDiamond(10);

////questions 10 ////

// const print = (input) => {
//   let patternCapturer = "";
//   for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= i; j++) {
//       patternCapturer += `${i} `;
//     }
//     patternCapturer += "\n";
//   }
//   console.log(patternCapturer);
// };

// print(5);

////questions 11 ////

// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }

////questions 12 ////
// const arr = [1, 6, 2, 3, 8, 9, 7];
// const sortedArr = arr.sort((a, b) => a - b);
// console.log(sortedArr);


////questions 13 ////
// const arr = [1, 6, 2, 3, 8, 9, 7];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log("Sorted Array:", arr);

////questions 14 ////

// const arr = [1, 2, 3];
// const newElement = 4;

// for (let i = 0; i <= arr.length; i++) {
//   if (i === arr.length) {
//     arr[i] = newElement; 
//     break; 
//   }
// }
// console.log(arr);



////questions 15 ////

// let rows = 5;
// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//    for (let space = 1; space <= rows - n; space++) {
//       pattern += " ";
//    }
//    for (let num = 1; num <= 2 * n - 1; num++) {
//       pattern += num;
//    }

//    pattern += "\n";
// }
// console.log(pattern);


////questions 16 ////

// let rows = 5;
// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += n;
//    }
//    pattern += "\n";
// }
// console.log(pattern);


////questions 17 ////
// let rows = 5;
// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//    for (let num = 0; num <=rows- n; num++) {
//       pattern += "*";
//    }
//    pattern += "\n";
// }
// console.log(pattern);

////questions 18 ////

// let statement1=0;
// let statement2=0;

// for(var i = 1; i <= 3; i++)
//     {
//       statement1++; 
//       for(var j = 1; j <= 4; j++)
//         {
//             statement2++; 

//         }
//     }
//     console.log(statement1)
//     console.log(statement2);   

////questions 18 ////

// for (let i = 0; i < 3; i++) console.log(i)

// run begin ///
// let i = 0;
// // s-1
// if (i < 3) {
//   console.log(i);
//   i++;
// }
// // s-2
// if (i < 3) {
//   console.log(i);
//   i++;
// }
// // s-3
// if (i < 3) {
//   console.log(i);
//   i++;
// }

////questions 19 ////
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//   }
// }


////questions 20 ////

// let dog = {
//   name: "Rover",
//   sound: "Woof",
//   makeSound: function() {
//     console.log(this.sound);
//   }
// };

// let cat = {
//   name: "Whiskers",
//   sound: "Meow"
// };

// let catSound = dog.makeSound.bind(cat);

// catSound(); 

////questions 21 ////

// // Arrow Function
// let sayHello = (name) => 'Hello, ' + name;
// console.log(sayHello('JavaScript!'));

// // Function Expression
// let sayHello = function (name) {
//   return 'Hello, ' + name;
// };

// console.log(sayHello('JavaScript!'));

////questions 22 ////

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = console.log(`Value at coordinates (${i},${j})`, '');

//     if (!input) break outer;
//     console.log(`Value at (${i},${j}) is: ${input}`);
//   }
// }
// console.log('Done!');

////questions 22 ////

// let x = 1;
// console.log(+x); 

// let y = -2;
// console.log(+y); 

// console.log(+true); 
// console.log(+''); 
// console.log(+'7'); 

////questions 22 ////

// let result = 0 / 0;
// let num = 7.14159;

// let roundedNum = num.toFixed(2);

// console.log(roundedNum);
// console.log(result);  
// console.log(typeof result); 
// console.log(Number.isNaN(result)); 


////questions 23 ////

// let obj = {};

// // Adding property
// obj.newProp = 'Hello';
// console.log(obj); 

// // Removing property
// delete obj.newProp;
// console.log(obj);


////questions 24 ////

// Array Like Object
// let fruits = {
//     0: 'Apple',
//     1: 'Pear',
//     2: 'Banana',
//     length: 3,
//   };

//   // Array
//   let fruits2 = ['Apple', 'Pear', 'Banana'];

//   console.log(fruits[0]); 

//   console.log(fruits2[0]);

//   console.log(fruits.length); 

//   let arrFruits = Array.from(fruits); 

//   console.log(arrFruits.length); 

//   console.log(arrFruits.pop());

//   console.log(arrFruits.length); 


////questions 25 ////
// let Xmas95 = new Date('December 25, 1995 23:15:30');
// let month = Xmas95.getMonth();

// console.log(month);


////questions 26 ////

// Creating a new Map
// let myMap = new Map();

// // Adding key-value pairs
// myMap.set('name', 'John');
// myMap.set('age', 30);

// // Accessing values
// console.log(myMap.get('name')); 
// console.log(myMap.get('age')); 

// // Checking if a key exists
// console.log(myMap.has('name')); 

// // Deleting a key-value pair
// myMap.delete('age');

// // Checking the size of the Map
// console.log(myMap.size); 

// // Clearing all key-value pairs
// myMap.clear();
// console.log(myMap.size); 



////questions 27 ////

// for(let i=1; i<5; i++){
// console.log(i);
//     for(let j=1; j<5; j++){
//         // console.log(j);
//         for(let k=1; k<3; k++){
//             console.log(k);
//             for(let p=1; p<5; p++){
//                 // console.log(p);
//                 for(let r=1; r<5; r++){
//                     // console.log(r);

//                 }

//             }

//         }
//     }
// }

////questions 28 ////

//// for of

// let arr = ['a', 'b', 'c'];
// for (let value of arr) {
//   console.log(value);  
// }

//// for 

// let arr = ['a', 'b', 'c'];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);  
// }

////questions 29 ////

// let obj = {
//   a: 'object???',
//   // Arrow Function
//   foo: () => {
//     console.log(this.a);
//   }, 
// };

// let a = 'global!!!'; 

// obj.foo(); 

///////////////////////////////////

// let obj2 = {
//   b: 'object???',
//   // Property Function
//   foo: function () {
//     console.log(this.b);
//   }, 
// };

// let b = 'global!!!'; 
// obj2.foo();


////questions 30 ////

/// Dummy functions to simulate asynchronous behavior
// function getData(callback) {
//     setTimeout(() => {
//       console.log("getData");
//       callback("data from getData");
//     }, 1000);
//   }

//   function getMoreData(a, callback) {
//     setTimeout(() => {
//       console.log("getMoreData:", a);
//       callback("data from getMoreData");
//     }, 1000);
//   }

//   function getEvenMoreData(b, callback) {
//     setTimeout(() => {
//       console.log("getEvenMoreData:", b);
//       callback("data from getEvenMoreData");
//     }, 1000);
//   }

//   function getYetMoreData(c, callback) {
//     setTimeout(() => {
//       console.log("getYetMoreData:", c);
//       callback("data from getYetMoreData");
//     }, 1000);
//   }

//   function getFinalData(d, callback) {
//     setTimeout(() => {
//       console.log("getFinalData:", d);
//       callback("final data");
//     }, 1000);
//   }

//   // The original code with callback hell
//   getData(function(a) {
//     getMoreData(a, function(b) {
//       getEvenMoreData(b, function(c) {
//         getYetMoreData(c, function(d) {
//           getFinalData(d, function(e) {
//             console.log("Final Output:", e);
//           });
//         });
//       });
//     });
//   });

////questions 31 ////

// let n=5;
// let String = "" ;
// for(let i=1; i<n; i++){
//   for(let j=0; j<n-i; j++){
//     String+= "*"
//   }
//   String += "\n"
// }
// console.log(String);


////questions 32 ////

// let n=4;
// let String = "";
// for(let i=0; i<=n; i++){
//   for(let j=0; j<=i; j++){
//     String += "*";
//   }
//   String += '\n';
// }
// console.log(String);

////questions 33 ////

// let n= 100;
// let abhi =[];
// for(let i=1; i<=n; i++){
//   abhi.push(i)
// }
// console.log(abhi);


////questions 34 ////

// let n = 100; 
// let result = []; 

// for (let i = 1; i <= n; i += 10) {
//   let subArray = [];

//   for (let j = i; j < i + 10; j++) {
//     subArray.push(j); 
//   }
//   result.push(subArray); 

// }

// console.log(result);

////questions 35 ////

// let counterOne = 5;
// let a = ++counterOne; 
// console.log(a); 

// let counterTwo = 5;
// let b = counterTwo++; 
// console.log(b); 

////questions 36 ////

// let fruit = "apple";

// switch (fruit) {
//     case "banana":
//         console.log("I am a banana.");
//         break;
//     case "orange":
//         console.log("I am an orange.");
//         break;
//     default:
//         console.log("Unknown fruit.");  
// }

// let vegetable = "carrot";

// switch (vegetable) {
//     case "potato":
//         console.log("I am a potato.");
//         break;
//     case "tomato":
//         console.log("I am a tomato.");
//         break;

// }

////questions 37 ////

// let car1 = {
//     brand: 'Tesla',
//     getBrand: function(){
//         console.log(this.brand);
//     }
// };

// let car2 = {
//     brand: 'Ford'
// };
// let getCar2Brand = car1.getBrand.bind(car2);

// getCar2Brand(); 
// function multiply(x, y) {
//     return x * y;
// }

// let double = multiply.bind(null, 2); 

// console.log(double(5)); 

////questions 38 ////

// let fruits = ['Apple', 'Orange', 'Pear'];

// console.log(fruits.pop()); 

// console.log(fruits);


// var myFish = {
//   0: 'angel',
//   1: 'clown',
//   2: 'mandarin',
//   3: 'sturgeon',
//   length: 4,
// };
// var popped = Array.prototype.pop.call(myFish); 

// console.log(myFish); 

// console.log(popped); // 'sturgeon'


////questions 39 ////

// function mul(a, b) {
//   return a * b;
// }

// let triple = mul.bind(null, 3);

// console.log(triple(3)); 
// console.log(triple(4)); 
// console.log(triple(5)); 

////questions 39 ////

// let buffer = new ArrayBuffer(16); 

// let view = new Uint32Array(buffer); 

// console.log(Uint32Array.BYTES_PER_ELEMENT); 

// console.log(view.length); 
// console.log(view.byteLength); 

// view[0] = 123456;

// for (let num of view) {
//   console.log(num); 
// }

////questions 40 ////

// let falsyValues = [false, 0, "", null, undefined, NaN];

// falsyValues.forEach(value => {
//     if (value) {
//         console.log(`${value} is truthy`);
//     } else {
//         console.log(`${value} is falsy`);
//     }
// });

////questions 41 ////

// function greeting(name) {
//     console.log(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//     const name = "Abhishek";
//     callback(name);  
// }

// processUserInput(greeting);

////questions 42 ////

// let user = {};

// Object.defineProperty(user, 'name', {
//   value: 'John',
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(JSON.stringify(descriptor, null, 2));

////questions 43 ////

// let height = null;
// let width = null;
// let height = 10;
// let width = 20;

// let area = (height ?? 100) * (width ?? 50);
// console.log(area); 

////questions 44 ////


// class Car {
//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     }
// }

// class Bike {
//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     }
// }

// let myCar = new Car('Tesla Model 3', 2022);
// let myBike = new Bike('Yamaha MT-15', 2020);

// console.log(myCar instanceof Car); 
// console.log(myCar instanceof Bike); 
// console.log(myBike instanceof Car); 
// console.log(myBike instanceof Bike); 

////questions 45 ////


// class MyClass {
//     static staticMethod() {
//       console.log('This is a static method.');
//     }

//     instanceMethod() {
//       console.log('This is an instance method.');
//     }
//   }

//   MyClass.staticMethod(); // "This is a static method."

//   let instance = new MyClass();
//   instance.instanceMethod(); // "This is an instance method."

////questions 46 ////

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = 'Hello, world!';
//     callback(data);
//   }, 1000);
// }

// fetchData((response) => {
//   console.log(response); 
// });

////questions 47////

// let i = 3;
// while (i) {
//   console.log(i);
//   i--; 
// }


// let items = ['apple', 'banana', 'orange'];
// while (items.length > 0) {
//   console.log(items.pop());
// }

////questions 48////


// var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// var evenNumbers = [];
// var oddNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 != 1) {
//         evenNumbers.push(numbers[i]);
//     } else {
//         oddNumbers.push(numbers[i]);
//     }
// }

// console.log("The even numbers are: " + evenNumbers); 
// console.log("The odd numbers are: " + oddNumbers);

////questions 49////


// let num1 = 3; 
// let num2 = -7; 
// let num3 = 2; 

// let product = num1 * num2 * num3;

// if (product > 0) {
//     console.log("The sign is +");
// } else if (product < 0) {
//     console.log("The sign is -");
// } else {
//     console.log("The product is zero");
// }


////questions 50////

// Using an Arrow Function
// let myFunction = (item, index) => {
//     console.log(index + ':' + item);
//   };

//   const fruits = ['apple', 'orange', 'cherry'];
//   fruits.forEach(myFunction);

//   // Using an Function Declaration
//   const fruits2 = ['apple', 'orange', 'cherry'];
//   fruits2.forEach(myFunction);

//   function myFunction(item, index) {
//     console.log(index + ':' + item);
//   }

////questions 51////


// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 10);

// console.log(found);



// let users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];

// let user = users.find((item) => item.id == 1);

// console.log(user.name); 


////questions 52////

// let id = Symbol('id');
// let user = {
//   name: 'John',
//   age: 30,
//   [id]: 123,
// };

// for (let key in user) console.log(key);

// console.log('Direct: ' + user[id]);

////questions 53////

// let a = 5;
// let string = "";

// for (let i=1;i<=a;i++){
//   string="";
//   for(let j=1;j<=i;j++){
//     string+="*";
//   }
//   console.log(string)
// }

////questions 54////


// 'use strict';

// let user = {
//   name: 'John',
// };

// Object.defineProperty(user, 'name', {
//   writable: false,
//   configurable: false,
// });

// console.log(user.name); 

////questions 55////


// let set = new Set();

// let john = { name: 'John' };
// let pete = { name: 'Pete' };
// let mary = { name: 'Mary' };


// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// console.log(set.size); 

// for (let user of set) {
//   console.log(user.name); 
// }

////questions 56////


// let Duck = function() {};
// Duck.prototype.quack = function() {
//     console.log('Quack!');
// };

// let NotADuck = function() {};

// let duck = new Duck();
// let notADuck = new NotADuck();

// function makeItQuack(possiblyADuck) {
//     if (typeof possiblyADuck.quack === 'function') {
//         possiblyADuck.quack();
//     } else {
//         console.log('This is not a duck!');
//     }
// }

// makeItQuack(duck); 
// makeItQuack(notADuck); 


////questions 57////

// let mixin = {
//     sayHi() {
//         console.log(`Hello ${this.name}`);
//     },
//     sayBye() {
//         console.log(`Bye ${this.name}`);
//     },
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // copy the methods
// Object.assign(User.prototype, mixin);

// // now User can say hi and bye
// let user = new User("John");
// user.sayHi(); // Hello John
// user.sayBye(); // Bye John

////questions 58////


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function () {
//       return `${this.firstName} ${this.lastName}`;
//     };
//   }
  
//   function Man(firstName, lastName) {
//     Person.call(this, firstName, lastName); // calling Person firstName, lastName
//     this.gender = 'Man';
//   }
  
//   const eric = new Man('Eric', 'Wilson');
//   console.log(eric.firstName + ' ' + eric.lastName); // returns Eric + Wilson
  
//   console.log(eric.getFullName()); // method call returns Full Name: Eric Wilson

////questions 59////


// Array of students with their names and grades
// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// // Loop through the students array to calculate the total marks
// for (var i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks / students.length);
// }

// // Calculate and log the average grade
// console.log("Average grade: " + (Avgmarks) / students.length);

// // Determine the grade based on the average
// if (avg < 60) {
//     console.log("Grade: F");
// } else if (avg < 70) {
//     console.log("Grade: D");
// } else if (avg < 80) {
//     console.log("Grade: C");
// } else if (avg < 90) {
//     console.log("Grade: B");
// } else if (avg <= 100) {
//     console.log("Grade: A");
// } 

////questions 60//// 
// Step 1: Initialize variables
// let sum = 0; 
// let i = 1; 

// const N = parseInt(console.log("Enter the value of N: ",10), 10);

// if (!isNaN(N) && N > 0) {
    
//     while (i <= N) {
//         sum += i; 
//         i++; 
//     }
//     console.log("The sum of the first " + N + " natural numbers is: " + sum);
// } else {
//     console.log("Please enter a valid positive number for N.");
// }

////questions 61//// 


// const object1 = {};

// console.log(Object.isExtensible(object1));
// // expected output: true

// Object.preventExtensions(object1);

// console.log(Object.isExtensible(object1));
// // expected output: false

////questions 62//// 


let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log('Name is too short, need at least 4 characters');
        return;
      }
      this._name = value;
    },
  };
  
  user.name = 'Pete';
  console.log(user.name); // Pete
  
  user.name = ''; // Name is too short...