'use strict';
var currentTest = 0;
var tests = [
  {
    title: 'Basic Variable',
    prompt: 'hello',
    correctAnswer: 'hello'
  }
];

function showPrompt(test) {
  var title = document.createElement('p');
  title.textContent = test.title;
}

function showNextTest() {
  var targetDiv = document.getElementById('tests');
  targetDiv.appendChild(showPrompt(tests[currentTest]))
}