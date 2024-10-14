const rightArrowPattern = (input) => {
  let patternCapturer = "";
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      patternCapturer += "* ";
    }
    patternCapturer += "\n";
  }
  for (let i = 1; i < input; i++) {
    for (let j = input - 1; j >= i; j--) {
      patternCapturer += "* ";
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};
rightArrowPattern(5);