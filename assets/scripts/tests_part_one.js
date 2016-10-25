'use strict';

var t = {
  currentTest: 0,
  units: [
    {
      title: 'A function called greet',
      prompt: 'function greet returns "hello world"',
      target: 'greet',
      type: 'func',
      expected: 'hello world'
    },
    {
      title: 'division',
      prompt: 'There should be a variable named divided that holds the value 4 divided by 3',
      target: 'divided',
      type: 'var',
      expected: 4 / 3
    }
  ]
};