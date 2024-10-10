
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

let rows = 5;

let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      if (num === 1 || num === n || n === rows) pattern += "*";
      else {
         pattern += " ";
      }
   }
   pattern += "\n";
}
console.log(pattern);

