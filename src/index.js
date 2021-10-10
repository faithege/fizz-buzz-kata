/*
We need to write a function that:
* Takes in the numbers 1 - 15
* For multiples of 3 the function should return Fizz
* For multiples of 5 the function should return Buzz
* For multiples of 15 the function should return FizzBuzz
*/

export const fizzBuzz = (inputNumber) => {
  switch (true) {
    case (inputNumber < 1 || inputNumber > 15):
      return 'Please enter a number between 1 and 15'
    case (inputNumber % 15 === 0):
      return 'FizzBuzz'
    case (inputNumber % 3 === 0):
      return 'Fizz'
    case (inputNumber % 5 === 0):
      return 'Buzz'
    default:
      return inputNumber
  }

  // if(inputNumber < 1 || inputNumber > 15){
  //   return 'Please enter a number between 1 and 15';
  // }
  // else if(inputNumber % 15 === 0){
  //   return 'FizzBuzz'
  // }
  // else if(inputNumber % 3 === 0){
  //   return 'Fizz'
  // }
  // else if(inputNumber % 5 === 0){
  //   return 'Buzz'
  // }
  // else {
  //   return inputNumber
  // }
};

// node peculiarities prevented this from working - added "type": "module" to package.json 
// https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file
console.log(fizzBuzz(12))
console.log(fizzBuzz(7))
console.log(fizzBuzz(25))