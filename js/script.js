function insert(digit){
    var currentDigits = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = currentDigits + digit;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function deleteLast(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calc(){
    var result = document.getElementById('result').innerHTML;
    if (result){
        document.getElementById('result').innerHTML = eval(result)
    }  
        
}
