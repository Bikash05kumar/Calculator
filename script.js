let btn = document.querySelectorAll('.num');
let currentInput = '';
let operation = null;
let previousInput = '';


let display = document.querySelector('.display');


function updateDisplay() {
    display.value = currentInput;
    
}

function handleNumberClick(event) {
    currentInput += event.target.textContent;
    updateDisplay();
}

function handleOperationClick(event) {
    
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = event.target.textContent;
    previousInput = currentInput;
    currentInput = '';
}


function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result;
    operation = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}
function clearLast(){
    display.value = display.value.slice(0,-1);
    currentInput.value = display.value.slice(0,-1);
}

const numberButtons = document.querySelectorAll('.num');
numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener('click', handleNumberClick);
});


const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach(operationButtons => {
    operationButtons.addEventListener('click', handleOperationClick);
});


document.querySelector('.res').addEventListener('click', clearDisplay);

document.querySelector('.resu').addEventListener('click', calculateResult);

document.querySelector('.del').addEventListener('click', clearLast);
