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
      title: 'thisYear divided by thisMonth',
      prompt: 'There should be a variable called dividedBy with the value of thisYear divided by thisMonth',
      target: 'dividedBy',
      type: 'var',
      expected: (2016 / 10)
    },
    {
      title: 'getting the remainder',
      prompt: 'There should be a variable called remainder that is the remainder from dividing 279 by 7',
      target: 'remainder',
      type: 'var',
      expected: (279 % 7)
    },
    {
      title: 'Multiplying',
      prompt: 'There should be a variable called eightteenSquared that holds the value of eightteen times eightteen',
      target: 'eightteenSquared',
      type: 'var',
      expected: (18 * 18)
    },
    {
      title: 'fakeStreet is a string',
      prompt: 'There should be a varibale called fakeStreet with the value of 123 Market Street',
      target: 'fakeStreet',
      type: 'var',
      expected: '123 Market Street'
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
      title: 'fakeAddress should be a string.',
      prompt: 'There should be a varibale called fakeAddress with the value of 123 Market Street San Francisco, California Concat the strings, don\'t cheat yourself!',
      target: 'fakeAddress',
      type: 'var',
      expected: '123 Market Street San Francisco, California'
    },
    {
      title: 'basic function',
      prompt: 'There should be a function called greet that returns the string "Hello World!"',
      target: 'greet',
      type: 'func',
      expected: 'Hello World!'
    },
    {
      title: 'function with one parameter',
      prompt: 'There should be a function called greetName that takes a name as a parameter. When invoked, it should return the string "Hello <name>" where <name> is the parameter passed in.',
      target: 'greetName',
      type: 'func',
      expected: 'Hello'
    },
    {
      title: 'A fuction with two parameters',
      prompt: ''
    }
  ]
};