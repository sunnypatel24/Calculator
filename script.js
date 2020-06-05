const container = document.getElementById("container");
for (let i = 0; i <= 9; i++) {
    let digit = document.createElement("div");
    digit.classList.add("digit-" + i);
    digit.innerHTML = i;
    container.appendChild(digit);
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
    return num1 / num2;
}

function operate(operator, num1, num2) {

}