function displayNumber(num){
    result.value+=num;
}
//to clear screen
function clearsc(){
    result.value="";
}

//evaluvation

function evaluvation(){
    expression=result.value;
    output=eval(expression);
    result.value=output;
}
//to delete each digit from back, we use slice()
function removeLast(){
    currentexp=result.value;
    newexp=currentexp.slice(0,-1);
    result.value=newexp;
}