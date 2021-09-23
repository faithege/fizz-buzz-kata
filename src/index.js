/*
We need to write a function that:
* Takes in the numbers 1 - 15
* For multiples of 3 the function should return Fizz
* For multiples of 5 the function should return Buzz
* For multiples of 15 the function should return FizzBuzz
*/

// In JavaScript || signifies 'OR'
export const fizzBuzz = (inputNumber) => {
  if(inputNumber < 1 || inputNumber > 15){
    return 'Please enter a number between 1 and 15';
  }
};