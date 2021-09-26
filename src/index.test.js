import {fizzBuzz} from "./index";

describe('FizzBuzz function should', () => {
  it('does not take in numbers less that one', () => {
    //Given that my number is less than one
    const input = 0

    //When I call the fizzBuzz function
    const output = fizzBuzz(input)

    //Then we should receive an error message
    const expectedOutput = 'Please enter a number between 1 and 15'

    expect(output).toEqual(expectedOutput);
  });

  it('does not take in numbers greater than 15', () => {
    //Given that my number is greater than 15
    const input = 16

    //When I call the fizzbuzz function
    const output = fizzBuzz(input)

    //Then
    const expectedOutput = 'Please enter a number between 1 and 15'

    expect(output).toEqual(expectedOutput);
  })

  it('should return Fizz if the input is a multiple of 3', () => {
    //Given that my number is a multiple of 3
    const input = 9

    //When I call the fizzbuzz function
    const output = fizzBuzz(input)

    //Then
    const expectedOutput = 'Fizz'

    expect(output).toEqual(expectedOutput);
  })

  it('should return Buzz if the input is a multiple of 5', () => {
    expect(fizzBuzz(10)).toEqual('Buzz');
  })

  it('should return FizzBuzz if the input is a multiple of 15', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  })

  it('should return the inputter number if it is not a multipl of 3, 5, or 15', () => {
    expect(fizzBuzz(2)).toEqual(2);
  })
});