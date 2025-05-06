var answer = document.getElementById('answer');
var equation = document.getElementById('equation');
function getValue(val) {
    if (equation.innerText != '0') {
        equation.innerText += val;
    }
    else {
        equation.innerText = val;
    }
}
function solve() {
    var eqn = equation.innerText;
    try {
        var result = eval(eqn);
        answer.innerText = result;
    }
    catch (error) {
        equation.innerText = error;
    }
}
function clearAll() {
    equation.innerText = '0';
    answer.innerText = '0';
}
