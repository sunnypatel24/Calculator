const container = document.getElementById("container");
const addButton = document.getElementById("add").addEventListener("click", addOperator);
const subtractButton = document.getElementById("subtract").addEventListener("click", subtractOperator);
const multiplyButton = document.getElementById("multiply").addEventListener("click", multiplyOperator);
const divideButton = document.getElementById("divide").addEventListener("click", divideOperator);
const equalButton = document.getElementById("equals").addEventListener("click", operate);
let operator = "";

for (let i = 0; i <= 9; i++) {
    let digit = document.createElement("div");
    let digitButton = document.createElement("button");
    digitButton.classList.add("digit-" + i);
    digitButton.innerHTML = i;
    digitButton.addEventListener("click", displayNums);
    digit.appendChild(digitButton);
    container.appendChild(digit);
}

function addOperator(num1, num2) {
    operator = "add";
    return operator;
}

function subtractOperator(num1, num2) {
    operator = "subtract";
    return operator;
}

function multiplyOperator(num1, num2) {
    operator = "multiply";
    return operator;
}

function divideOperator(num1, num2) {
    operator = "divide";
    return operator;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error!";
    } else {
        return num1 / num2;
    }
}

function operate(operator, num1, num2) {
    if (operator === "add") {
        add(num1, num2);
    } else if (operator === "subtract") {
        subtract(num1, num2);
    } else if (operator === "multiply") {
        multiply(num1, num2);
    } else {
        divide(num1, num2);
    }
}

function displayNums() {
    
}