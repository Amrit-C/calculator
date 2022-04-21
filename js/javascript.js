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