// Initialize the display value
let displayValue = '0';
let displayAnswer = '';
let currentOperand = null;
let currentOperator = null;

// Function to append the clicked button value to the display
function appendToDisplay(value) {

    if (value === '.' && displayValue.includes('.')) {
        // If the value is a decimal point and the display already contains one, do nothing
        return;
    } 
    if (value === '.' && displayValue === '0') {
        // If the value is a decimal point and the current display value is zero, add the zero and the decimal point
        displayValue = '0' + value;
        displayAnswer = '0' + value;
    } else 
    if (isOperator(value)) {
      // If the clicked button is an operator, display the operator
      displayValue = value;
      displayAnswer +=value;
    } else {
      // If it's a number or another button, append to the display
      displayValue = (displayValue === '0' || isOperator(displayValue)) ? value : displayValue + value;
      displayAnswer = (displayAnswer === '') ? value : displayAnswer + value;
    }
  
    // Update the display
    updateDisplay();
  } // 

// Function to check if the input is an operator
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
  }

// Function to clear the display
function clearDisplay() {
    displayValue = '0';
    displayAnswer = '';
    currentOperand = null;
  currentOperator = null;
  
    
    updateDisplay();
  }
  
// Function to update the display with the current value
function updateDisplay() {
  const displayInput = document.getElementById('input');
  const displayAnswerValue = document.getElementById('answer');
  displayInput.textContent = displayValue;
  displayAnswerValue.textContent = displayAnswer;
}

// Function to handle arithmetic operations
function performOperation(operator) {
    if (currentOperand === null) {
      // If no current operand, set the display value as the current operand
      currentOperand = parseFloat(displayValue);
    } else {
      // If there's a current operand, perform the previous operation
      switch (currentOperator) {
        case '+':
          currentOperand += parseFloat(displayValue);
          break;
        case '-':
          currentOperand -= parseFloat(displayValue);
          break;
        case '*':
          currentOperand *= parseFloat(displayValue);
          break;
        case '/':
          currentOperand /= parseFloat(displayValue);
          break;
        default:
          // If no operator, set the display value as the current operand
          currentOperand = parseFloat(displayValue);
          break;
      }
    }
   
 // Update the expression based on the resultDisplayed flag


    // Set the current operator and clear the display for the next input
    currentOperator = operator;
    displayAnswer =displayValue + operator;
    displayValue = operator;
    

  
    // Update the display
    updateDisplay();
  }
  
  // Function to calculate and display the result
  function calculateResult() {
    if (currentOperand !== null && currentOperator !== null) {
      switch (currentOperator) {
        case '+':
          currentOperand += parseFloat(displayValue);
          break;
        case '-':
          currentOperand -= parseFloat(displayValue);
          break;
        case '*':
          currentOperand *= parseFloat(displayValue);
          break;
        case '/':
          currentOperand /= parseFloat(displayValue);
          break;
        default:
          break;
      }
  
      // Display the result
      displayValue = currentOperand.toString();
      displayAnswer += '='+ displayValue;
      currentOperand = null;
      currentOperator = null;
      updateDisplay();
    }
  }
  