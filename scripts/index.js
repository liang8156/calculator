function runAC() {
    document.calculator.display.value = "";
};

function runCE() {
    document.calculator.display.value = document.calculator.display.value.slice(0, -1);
};

function run1() {
    document.calculator.display.value += "1";
};

function run2() {
    document.calculator.display.value += "2";
};
function run3() {
    document.calculator.display.value += "3";
};

function run4() {
    document.calculator.display.value += "4";
};

function run5() {
    document.calculator.display.value += "5";
};


function run6() {
    document.display.value += "6";
};

function run7() {
    document.calculator.display.value += "7";
};

function run8() {
    document.calculator.display.value += "8";
};

function run9() {
    document.calculator.display.value += "9";
};

function run0() {
    document.calculator.display.value += "0";
};

function runDot() {
    document.calculator.display.value += ".";
};

function runPlus() {
    document.calculator.display.value += "+";
};

function runTime() {
    document.calculator.display.value += "*";
};

function runDivide() {
    document.calculator.display.value += "/";
};

function runMinus() {
    document.calculator.display.value += "-";
};

function runRemainder() {
    document.calculator.display.value += "%";
};

function runEquals() {
    var Equals = eval(document.calculator.display.value);
    document.calculator.display.value = Equals;
};

