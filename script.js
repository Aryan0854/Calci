let displayValue = "0";

function updateDisplay() {
    document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function appendSymbol(symbol) {
    if (symbol === "." && displayValue.includes(".")) return;

    if (displayValue === "0" && symbol !== ".") {
        displayValue = symbol;
    } else {
        displayValue += symbol;
    }

    updateDisplay();
}

function calculate() {
    try {
        let result = Function('"use strict";return (' + displayValue + ')')();
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

updateDisplay();
