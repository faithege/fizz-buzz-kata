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
});