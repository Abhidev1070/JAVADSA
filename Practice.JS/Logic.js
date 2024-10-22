
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

// run begin
let i = 0;
// s-1
if (i < 3) {
  console.log(i);
  i++;
}
// s-2
if (i < 3) {
  console.log(i);
  i++;
}
// s-3
if (i < 3) {
  console.log(i);
  i++;
}
