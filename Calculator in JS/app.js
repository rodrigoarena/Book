// NUMEROS AL VISUALIZADOR

// NUMERO 1
let num1 = document.getElementById('n1'); // agarro el elemento HTML (el numero 1)
num1.addEventListener('click', n1); // a ese elemento le agrego un evento (Click)

function n1() { // creo el funcionamiento de dicho elemento (el numero 1)
    let visor = document.getElementById('resultado').innerHTML; // agarro el elemento 'resultado' que es 
// donde se veran los numeros que vayamos marcando, el 'innerHTML' es xq se agrega 'algo' al elemento HTML seleccionado
    let suma = document.getElementById('n1').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma; // al visualizador le agregamos lo que 
// agarramos anteriormente y lo volvemos a meter en el visualizador
}

// NUMERO 2
let num2 = document.getElementById('n2');
num2.addEventListener('click', n2);

function n2() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('n2').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma;
}

// NUMERO 3
let num3 = document.getElementById('n3');
num3.addEventListener('click', n3);

function n3() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('n3').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma;
}

// NUMERO 4
let num4 = document.getElementById('n4');
num4.addEventListener('click', n4);

function n4() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('n4').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma;
}

// NUMERO 5
let num5 = document.getElementById('n5');
num5.addEventListener('click', n5);

function n5() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('n5').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma;
}

// NUMERO 6
let num6 = document.getElementById('n6');
num6.addEventListener('click', n6);

function n6() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('n6').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma;
}

// NUMERO 7
let num7 = document.getElementById('n7');
num7.addEventListener('click', n7);

function n7() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('n7').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma;
}

// NUMERO 8
let num8 = document.getElementById('n8');
num8.addEventListener('click', n8);

function n8() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('n8').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma;
}

// NUMERO 9
let num9 = document.getElementById('n9');
num9.addEventListener('click', n9);

function n9() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('n9').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma;
}

// NUMERO 0
let num0 = document.getElementById('n0');
num0.addEventListener('click', n0);

function n0() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('n0').innerHTML;
    document.getElementById('resultado').innerHTML = visor + suma;
}

// OPERACIONES

// SUMA
let opSuma = document.getElementById('suma');
opSuma.addEventListener('click', opSum);

function opSum() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('suma').innerHTML;
    document.getElementById('resultado').innerHTML = visor + ' ' + suma + ' ';
}

// RESTA
let opResta = document.getElementById('resta');
opResta.addEventListener('click', opRest);

function opRest() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('resta').innerHTML;
    document.getElementById('resultado').innerHTML = visor + ' ' + suma + ' ';
}
 
// MULTIPLICACION
let opMulti = document.getElementById('multi');
opMulti.addEventListener('click', opMult);

function opMult() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('multi').innerHTML;
    document.getElementById('resultado').innerHTML = visor + ' ' + suma + ' ';
}

// DIVISION
let opDivi = document.getElementById('divi');
opDivi.addEventListener('click', opDiv);

function opDiv() {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = document.getElementById('divi').innerHTML;
    document.getElementById('resultado').innerHTML = visor + ' ' + suma + ' ';
} 

// RESULTADOS
let opResultado = document.getElementById('igual');
opResultado.addEventListener('click', opResult);

function opResult () {
    let visor = document.getElementById('resultado').innerHTML;
    let suma = visor.indexOf('+');
    let resta = visor.indexOf('-');
    let divi = visor.indexOf('/');
    let multi = visor.indexOf('x');

    if (suma !== -1) {
        array = visor.split('+', 2);
        result = parseInt(array[0]) + parseInt(array[1]);
        document.getElementById('resultado').innerHTML = result;
    } else if (resta !== -1) {
        array = visor.split('-', 2);
        result = parseInt(array[0]) - parseInt(array[1]);
        document.getElementById('resultado').innerHTML = result;
    } else if (divi !== -1) {
        array = visor.split('/', 2);
        result = parseInt(array[0]) / parseInt(array[1]);
        document.getElementById('resultado').innerHTML = result;
    } else if (multi !== -1) {
        array = visor.split('x', 2);
        result = parseInt(array[0]) * parseInt(array[1]);
        document.getElementById('resultado').innerHTML = result;
    }

}