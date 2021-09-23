/*
We need to write a function that:
* Takes in the numbers 1 - 15
* For multiples of 3 the function should return Fizz
* For multiples of 5 the function should return Buzz
* For multiples of 15 the function should return FizzBuzz
*/

export const fizzBuzz = (inputNumber) => {
  // In JavaScript || signifies 'OR'
  if(inputNumber < 1 || inputNumber > 15){
    return 'Please enter a number between 1 and 15';
  }
  else if(inputNumber % 3 === 0){
    return 'Fizz'
  }
};