'use strict';
/*
* It is expected that each tests is an array of test objects,
* each with the following structure:
* {
    title: ,
    prompt: ,
    target: ,
    type: ,
    expected:
  }
* Where title is the test title
* prompt is the test prompt
* target is the varibale or function name
* type is either 'var' representing a variable or 'func' representing function and
* expected is the value expected to be held in the variable or returned from the function
*/
function TestUtils(tests) {
  var tests = tests;
  var testUtils = {
    testRunner: function() {
      this.showTestCount(tests);
      if (tests.currentTest < tests.units.length) {
        this.showTestTitle(tests.units[tests.currentTest]);
        this.checkAnswer(tests.units[tests.currentTest], tests);
      } else {
        this.congratulate();
      }
    },

    sendNotAFunctionError: function(test) {
      this.sendMessage(`Expected ${test.target} to be a function, but instead got ${typeof window[test['target']]}.`, 'red');
    },

    checkAnswerInVariable: function(test) {
      if (window[test['target']] === test.expected) {
        this.incrementTestCount(tests);
        this.testRunner(tests);
      } else {
        this.sendMessage(test.prompt, 'red');
      }
    },

    checkFunctionAnswer: function(test, tests) {
      if (window[test['target']]() === test.expected) {
        this.incrementTestCount(tests);
        this.testRunner(tests);
      } else {
        this.sendMessage(test.prompt, 'red');
      }
    },

    clearTestTitle: function() {
      document.getElementById('test_title').textContent = '';
    },

    showTestTitle: function(test) {
      var title = document.createElement('h2');
      title.textContent = test.title;
      // this.clearTestTitle();
      document.getElementById('test_title').appendChild(title);
    },

    checkAnswer: function(test, tests) {
      if (test.type === 'var') {
        this.checkAnswerInVariable(test, tests);
      }
      if (test.type === 'func') {
        if (typeof window[test['target']] !== 'function') {
          return this.sendNotAFunctionError(test);
        }
        this.checkFunctionAnswer(test, tests);
      }
    },

    incrementTestCount: function(tests) {
      tests.currentTest++;
      this.showTestCount(tests);
    },

    showTestCount: function(tests) {
      var testsLeft = 'Tests left: ' + (tests.units.length - tests.currentTest).toString();
      document.getElementById('test_count').textContent = testsLeft;
    },

    congratulate: function() {
      this.clearTestTitle();
      this.sendMessage('That\'s it!', 'green');
    },

    makeElement: function(text, color) {
      var newEle = document.createElement('h3');
      newEle.textContent = text;
      newEle.style.color = color;
      return newEle;
    },

    sendMessage: function(message, color) {
      // document.getElementById('tests').innerHTML = '';
      var newMessage = this.makeElement(message, color);
      document.getElementById('tests').prepend(newMessage);
    }
  };
  return testUtils;
}
