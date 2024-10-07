const display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = '';
let isResultShown = false;

document.querySelector('.calculator-buttons').addEventListener('click', function (e) {
  if (!e.target.matches('button')) return;
  const key = e.target.dataset.key;

  if (!isNaN(key) || key === '.') {
    handleNumberInput(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    handleOperatorInput(key);
  } else if (key === '=') {
    handleEquals();
  } else if (key === 'clear') {
    handleClear();
  } else if (key === 'negate') {
    handleNegate();
  } else if (key === 'backspace') {
    handleBackspace();
  }
});

function handleNumberInput(key) {
  if (isResultShown) {
    currentInput = key;
    isResultShown = false;
  } else if (currentInput === '0' && key !== '.') {
    currentInput = key;
  } else if (currentInput.includes('.') && key === '.') {
    return;
  } else {
    currentInput += key;
  }
  updateDisplay(currentInput);
}

function handleOperatorInput(key) {
  if (previousInput && operator && currentInput) {
    handleEquals();
  }
  operator = key;
  previousInput = currentInput;
  currentInput = '';
}

function handleEquals() {
  if (!operator || !previousInput || !currentInput) return;

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  isResultShown = true;
  updateDisplay(currentInput);
}

function handleClear() {
  currentInput = '0';
  previousInput = '';
  operator = '';
  isResultShown = false;
  updateDisplay(currentInput);
}

function handleNegate() {
  if (currentInput !== '0') {
    currentInput = (-parseFloat(currentInput)).toString();
    updateDisplay(currentInput);
  }
}

function handleBackspace() {
  currentInput = currentInput.slice(0, -1) || '0';
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  display.value = value;
}
