export function isNumber(str) {
    return !isNaN(str) || str === '.';
  }
  
  export function isOperator(str) {
    return ['+', '-', '*', '/'].includes(str);
  }
  