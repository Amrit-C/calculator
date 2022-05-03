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
        if(b=='0'){
            return "Error. Cannot divide by 0";
        }
        return divide(a,b); 
    }
}

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
let displayValueWithoutOperator = '';
let displayValueWithOperator = '';
let answer = '';
let operator = '';

//Display digits on the output and store values.
function addingEventListenerToDigits(digit){
    digit.addEventListener('click', function (e){
        if(!operator){
            displayValueWithoutOperator += digit.textContent;
            outputDisplay.innerHTML = displayValueWithoutOperator;
        } else {
            displayValueWithOperator += digit.textContent;
            outputDisplay.innerHTML = displayValueWithOperator;
        }
    }
    )
}
//Clear button restores nothing
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', e => {
    outputDisplay.textContent = ''; 
    firstDigit = 0; 
    secondDigit = 0;
    operator = '';
    displayValueWithOperator = 0;
    displayValueWithoutOperator = 0;
})

//Operator Selection
function addingEventListenerToOperators(operators){
    operators.addEventListener('click', function (e){

        if (!answer){
            firstDigit = Number(displayValueWithoutOperator);
        }

        switch(operators.id){
            case 'subtract': operator ='subtract'; break;
            case 'add': operator = 'add'; break;
            case 'multiply': operator = 'multiply'; break;
            case 'divide': operator = 'divide'; break;
        }
    })
}

//Display answer when equal sign clicked 
equalSign.addEventListener('click', (e) => {
    secondDigit = Number(displayValueWithOperator);

    answer = Number(operate(operator, firstDigit, secondDigit));
    outputDisplay.textContent = answer;

    console.log("Operator: " + operator);
    console.log("FirstDigit: " + firstDigit);
    console.log("SecondDigit: " + secondDigit);
    console.log("Answer: " + outputDisplay.textContent);

    firstDigit = Number(answer);
    displayValueWithOperator = '';
    
})

