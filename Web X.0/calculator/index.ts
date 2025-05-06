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