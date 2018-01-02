$(document).ready(function() {

  var currNumbers = '0';
  var lastNumbers = 0;
  var calculation = null;
  var answer = 0;
  updateDisplay(answer);

  $('.number').on('click', function() {
    var pushButton = $(this).html();
    console.log(pushButton);
    if (pushButton === "C") {
      answer = 0;
    currNumbers = '0';
    }
    else if (pushButton === "CE") {
      currNumbers = '0';
    }
    else if (pushButton === "back") {

    }
    else if (pushButton === "+/-") {
      currNumbers *= -1;
    }
    else if (pushButton === '.') {
      currNumbers += '.';
    }
    else if (isNumber(pushButton)) {
      if (currNumbers === '0') currNumbers = pushButton;
      else currNumbers = currNumbers + pushButton;
    }
    else if (isOperator(pushButton)) {
      lastNumbers = parseFloat(currNumbers);
     calculation = pushButton;
      currNumbers = '';
    }
    else if (pushButton === '=') {
      currNumbers = operater(lastNumbers, currNumbers, calculation);
      calculation = null;
    }

    updateDisplay(currNumbers);
  });
});

updateDisplay = function(displayAnswer) {
  var displayAnswer = displayAnswer.toString();
  $('#display').html(displayAnswer.slice(0, 10));
};

isNumber = function(value) {
  return !isNaN(value);
}

isOperator = function(value) {
  return value === '+'
  || value === '-'
  || value === '*'
  || value === '/';
};

operater = function(x, y, calculation) {
  x = parseFloat(x);
  y = parseFloat(y);
  console.log(x, y, calculation);
  if (calculation === '+') return x + y;
  if (calculation === '-') return x - y;
  if (calculation === '*') return x * y;
  if (calculation === '/') return x / y;
}
