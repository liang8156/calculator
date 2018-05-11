let calculatorElement = ["AC", "CE", "/", "%",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    ".", "0", "=", "empty"]

function run(symbol) {
    switch (symbol) {
        case 'AC':
            document.calculator.display.value = "";
            break
        case 'CE':
            document.calculator.display.value = document.calculator.display.value.slice(0, -1);
            break
        case '=':
            var Equals = eval(document.calculator.display.value);
            document.calculator.display.value = Equals;
            break
        case '+/-':
            if (document.calculator.display.value.substr(0, 1) != '-') {
                document.calculator.display.value = "-" + document.calculator.display.value;
            }
            else {
                document.calculator.display.value = document.calculator.display.value.slice(1, )
            }
            break
        case '.':
            console.log(document.calculator.display.value.indexOf("."))
            if (document.calculator.display.value.indexOf(".") === -1) {
                document.calculator.display.value += symbol;
            }
            break
        case 'xxx':
            document.calculator.display.value += symbol;
            break
        default:
            document.calculator.display.value += symbol;
            break
    }
};

