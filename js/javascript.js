function add(a, b){
    return a + b;
}

function subtract (a, b){
    return a - b; 
}

function mutliply (a, b){
    return a * b; 
}

function divide (a, b){
    return a/b;
}

function operate(operator, a, b){
    if (operator.toLowerCase() == "add"){
        return add(a,b);
    }

    if (operator.toLowerCase() == "subtract"){
        return subtract(a,b);
    }

    if (operator.toLowerCase() == "multiply"){
        return mutliply(a,b);
    }

    if (operator.toLowerCase() == "divide"){
        return divide(a,b); 
    }
}

//Object Constructor for display value. 
function Output (num1, num2, operator){
    this.num1 = num1; 
    this.num2 = num2; 
    this.operator = operator; 
}

const display = new Output(1,2,3);

//Add listener to digit buttons
const digitClicked = document.querySelectorAll('.digits');
const outputDisplay = document.querySelector('.output-display');
const operatorClicked = document.querySelectorAll('.operators');
const equalSign = document.getElementById('equals');

digitClicked.forEach(addingEventListenerToDigits);
operatorClicked.forEach(addingEventListenerToOperators);

//Variables for first digit, second digit, operator.
let firstDigit; 
let secondDigit; 
let operator;

//Display digits on the output and store values.
function addingEventListenerToDigits(digit){
    digit.addEventListener('click', function (e){
        outputDisplay.innerHTML = digit.textContent;
        if (!firstDigit){
            firstDigit = Number(digit.textContent);
        }else{
            secondDigit = Number(digit.textContent);
        }
    })
}
//Clear button restores nothing
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', e => {
    outputDisplay.textContent = ''; 
    firstDigit = 0; 
    secondDigit = 0;
})

//Operator Selection
function addingEventListenerToOperators(operators){
    operators.addEventListener('click', function (e){
        switch(operators.id){
            case 'subtract': operator ='subtract'; break;
            case 'add': operator = 'add'; break;
            case 'multiply': operator = 'multiply'; break;
            case 'divide': operator = 'divide'; break;
        }
    })
}

//Equal sign and display answer
equalSign.addEventListener('click', (e) => {
    firstDigit = Number(operate(operator, firstDigit, secondDigit));
    outputDisplay.textContent = firstDigit;
})

