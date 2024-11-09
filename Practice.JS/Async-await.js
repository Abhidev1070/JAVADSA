  // // async and await function practice
  
   /// 1 ////
  
  // async function z() {
  //   return 1;
  // }
  // console.log(z()); 

  
  /// 2 ////

  function calculateSum(a, b) {
    return a + b;
}

async function calculateAndLogSum() {
    const sum = await calculateSum(5, 10);
    console.log(sum); 
}

calculateAndLogSum();