var pantalla = document.getElementById('resultadoP');
var auxiliar = 0;
let operador =null;
let total = 0;

function numero (num){
    pantalla.innerText += num.toString();
    console.log(num);
}

function operacion (signo){
    console.log(signo);
        operador = signo;
        auxiliar = pantalla.innerText;
        operar();
        pantalla.innerText = '';
}

function operar (){
    
    switch (operador){
        case '+':
            total = parseFloat(auxiliar) + parseFloat(pantalla.innerText);
            pantalla.innerText = total.toString();
            console.log(total);
            break;
        case '-':
            console.log(pantalla.innerText);
            total = parseFloat(auxiliar) - parseFloat(pantalla.innerText);
            pantalla.innerText = total.toString();
            console.log(total);
            break;
        case '*':
            console.log(pantalla.innerText);
            total = parseFloat(auxiliar) * parseFloat(pantalla.innerText);
            pantalla.innerText = total.toString();
            console.log(total);
            break;
        case '/':
            console.log(pantalla.innerText);
            total = parseFloat(auxiliar) / parseFloat(pantalla.innerText);
            pantalla.innerText = total.toString();
            console.log(total);
            break;

            case 'c':
                pantalla.innerText = '';
                auxiliar = 0;
                perador =null;
                total = 0;
                break;
    }
    
}



