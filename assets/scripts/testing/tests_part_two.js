'use strict';

var partTwoTests = {
  currentTest: 0,
  units: [
    {
      title: 'A function that returns an array',
      prompt: 'There should be a function called sumsArray that takes an array of numbers and returns the sum of all the values in the array',
      target: 'sumsArray',
      type: 'func',
      expected: 15
    },
    {
      title: 'Another function using a loop',
      prompt: 'There should be a function called fizzBuzz that takes a number and returns a string. Use a loop to make that string with every number from 0 to the input number, except: If the number is divisible by 3, replace the number with "fizz". If the number is divisible by 5 replace the number with "buzz". If the number is divisible by both 3 and 5 replace the number with the word "fizzBuzz! So, fizzBuzz(5) would return: "012fizz4buzz',
      target: 'fizzBuzz',
      type: 'func',
      expected: '012fizz4buzz'
    }
  ]
}
