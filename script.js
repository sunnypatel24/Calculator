const container = document.getElementById("container");
const addButton = document.getElementById("add").addEventListener("click", addOperator);
const subtractButton = document.getElementById("subtract").addEventListener("click", subtractOperator);
const multiplyButton = document.getElementById("multiply").addEventListener("click", multiplyOperator);
const divideButton = document.getElementById("divide").addEventListener("click", divideOperator);
const equalButton = document.getElementById("equals").addEventListener("click", displayResult);
const clearButton = document.getElementById("clear").addEventListener("click", clearMem);
const digit0 = document.getElementsByClassName("digit-0");
const digit1 = document.getElementsByClassName("digit-1");
const digit2 = document.getElementsByClassName("digit-2");
const digit3 = document.getElementsByClassName("digit-3");
const digit4 = document.getElementsByClassName("digit-4");
const digit5 = document.getElementsByClassName("digit-5");
const digit6 = document.getElementsByClassName("digit-6");
const digit7 = document.getElementsByClassName("digit-7");
const digit8 = document.getElementsByClassName("digit-8");
const digit9 = document.getElementsByClassName("digit-9");
let operator = "";
let num1 = "";
let num2 = "";
let numCount = 1;

for (let i = 0; i <= 9; i++) {
    let digit = document.createElement("div");
    let digitButton = document.createElement("button");
    digitButton.classList.add("digit-" + i);
    digitButton.innerHTML = i;
    digit.appendChild(digitButton);
    container.appendChild(digit);
}

for (let i = 0; i < digit0.length; i++) {
    digit0[i].addEventListener("click", display0);
}

for (let i = 0; i < digit1.length; i++) {
    digit1[i].addEventListener("click", display1);
}

for (let i = 0; i < digit2.length; i++) {
    digit2[i].addEventListener("click", display2);
}

for (let i = 0; i < digit3.length; i++) {
    digit3[i].addEventListener("click", display3);
}

for (let i = 0; i < digit4.length; i++) {
    digit4[i].addEventListener("click", display4);
}

for (let i = 0; i < digit5.length; i++) {
    digit5[i].addEventListener("click", display5);
}

for (let i = 0; i < digit6.length; i++) {
    digit6[i].addEventListener("click", display6);
}

for (let i = 0; i < digit7.length; i++) {
    digit7[i].addEventListener("click", display7);
}

for (let i = 0; i < digit8.length; i++) {
    digit8[i].addEventListener("click", display8);
}

for (let i = 0; i < digit9.length; i++) {
    digit9[i].addEventListener("click", display9);
}

function addOperator() {
    numCount++;
    operator = "add";
    let removeNum = document.getElementById("nums");
    while (removeNum.hasChildNodes()) {
        removeNum.removeChild(removeNum.firstChild);
    }
}

function subtractOperator() {
    numCount++;
    operator = "subtract";
    let removeNum = document.getElementById("nums");
    while (removeNum.hasChildNodes()) {
        removeNum.removeChild(removeNum.firstChild);
    }
}

function multiplyOperator() {
    numCount++;
    operator = "multiply";
    let removeNum = document.getElementById("nums");
    while (removeNum.hasChildNodes()) {
        removeNum.removeChild(removeNum.firstChild);
    }
}

function divideOperator() {
    numCount++;
    operator = "divide";
    let removeNum = document.getElementById("nums");
    while (removeNum.hasChildNodes()) {
        removeNum.removeChild(removeNum.firstChild);
    }
}

function add() {
    let newInt1 = parseInt(num1);
    let newInt2 = parseInt(num2);
    return (newInt1 + newInt2);
}

function subtract() {
    return num1 - num2;
}

function multiply() {
    return num1 * num2;
}

function divide() {
    if (num2 === "0") {
        return "Error!";
    } else {
        return num1 / num2;
    }
}

function operate() {
    if (operator === "add") {
        let result = add();
        return result;
    } else if (operator === "subtract") {
        let result = subtract();
        return result;
    } else if (operator === "multiply") {
        let result = multiply();
        return result;
    } else if (operator === "divide") {
        let result = divide();
        return result;
    } else {
        return 0;
    }
}

function clearMem() {
    let removeNum = document.getElementById("nums");
    while (removeNum.hasChildNodes()) {
        removeNum.removeChild(removeNum.firstChild);
    }
    num1 = "";
    num2 = "";
    numCount = 1;
    operator = "";
}

function display0() {
    if (numCount % 2 == 0) {
        num2 += "0";
    } else {
        num1 += "0";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("0");
    num.appendChild(node);
    container.appendChild(num);
}

function display1() {
    if (numCount % 2 == 0) {
        num2 += "1";
    } else {
        num1 += "1";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("1");
    num.appendChild(node);
    container.appendChild(num);
}

function display2() {
    if (numCount % 2 == 0) {
        num2 += "2";
    } else {
        num1 += "2";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("2");
    num.appendChild(node);
    container.appendChild(num);
}

function display3() {
    if (numCount % 2 == 0) {
        num2 += "3";
    } else {
        num1 += "3";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("3");
    num.appendChild(node);
    container.appendChild(num);
}

function display4() {
    if (numCount % 2 == 0) {
        num2 += "4";
    } else {
        num1 += "4";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("4");
    num.appendChild(node);
    container.appendChild(num);
}

function display5() {
    if (numCount % 2 == 0) {
        num2 += "5";
    } else {
        num1 += "5";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("5");
    num.appendChild(node);
    container.appendChild(num);
}

function display6() {
    if (numCount % 2 == 0) {
        num2 += "6";
    } else {
        num1 += "6";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("6");
    num.appendChild(node);
    container.appendChild(num);
}

function display7() {
    if (numCount % 2 == 0) {
        num2 += "7";
    } else {
        num1 += "7";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("7");
    num.appendChild(node);
    container.appendChild(num);
}

function display8() {
    if (numCount % 2 == 0) {
        num2 += "8";
    } else {
        num1 += "8";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("8");
    num.appendChild(node);
    container.appendChild(num);
}

function display9() {
    if (numCount % 2 == 0) {
        num2 += "9";
    } else {
        num1 += "9";
    }
    let num = document.getElementById("nums");
    let node = document.createTextNode("9");
    num.appendChild(node);
    container.appendChild(num);
}

function displayResult() {
    let removeNum = document.getElementById("nums");
    while (removeNum.hasChildNodes()) {
        removeNum.removeChild(removeNum.firstChild);
    }
    let result = operate();
    let num = document.getElementById("nums");
    let node = document.createTextNode(result + "");
    num.appendChild(node);
    container.appendChild(num);
    numCount++;
    num2 = "";
    num1 = result;
}