'use strict';

var t = {
  currentTest: 0,
  units: [
    {
      title: 'thisYear is a number',
      prompt: 'There should be a variable named thisYear with the value 2016',
      target: 'thisYear',
      type: 'var',
      expected: 2016
    },
    {
      title: 'thisMonth is a number',
      prompt: 'There should be a variable named thisMonth with the value 10',
      target: 'thisMonth',
      type: 'var',
      expected: 10
    },
    {
      title: 'thisCity is a string',
      prompt: 'There should be a variable called thisCity with the value San Francisco',
      target: 'thisCity',
      type: 'var',
      expected: 'San Francisco'
    },
    {
      title: 'thisState is a string',
      prompt: 'There should be a variable called thisState with the value California',
      target: 'thisState',
      type: 'var',
      expected: 'California'
    },
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