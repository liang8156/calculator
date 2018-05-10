let calculatorElement = ["AC", "CE", "/", "%",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    ".", "0", "=", "empty"]
function runAC() {
    document.calculator.display.value = "";
    console.log(calculatorElement)
};

function runCE() {
    document.calculator.display.value = document.calculator.display.value.slice(0, -1);
};

function run(number) {
    console.log(number)
    document.calculator.display.value += number;
};

function runEquals() {
    var Equals = eval(document.calculator.display.value);
    document.calculator.display.value = Equals;
};

