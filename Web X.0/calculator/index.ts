const answer = document.getElementById('answer') as HTMLDivElement;
const equation = document.getElementById('equation') as HTMLDivElement;

function getValue(val){
    if(equation.innerText != '0'){
        equation.innerText += val;
    }
    else{
        equation.innerText = val;
    }
}

function solve(){
    var eqn = equation.innerText;
    try{
        var result = eval(eqn);
        answer.innerText = result;
    }
    catch(error){
        equation.innerText = error
    }
}

function clearAll(){
    equation.innerText = '0';
    answer.innerText = '0';
}

function removeDigit(){
    if(input_equation.innerText.length > 1){
        input_equation.innerText = input_equation.innerText.slice(0, -1);
    }
    else{
        input_equation.innerText = '0';
    }
}
