let calculadora = {};

function sumar(numeroA, numeroB) {
    return numeroA + numeroB;
}

function restar (numeroA, numeroB) {
    return numeroA - numeroB;
}

function multiplicar(numeroA, numeroB) {
    numeroA * numeroB;
}

function dividir (numeroA, numeroB) {
    if(numeroB == 0){
        console.log ("No se puede dividir ")
    } else {
        return numeroA / numeroB
    }
}

calculadora.sumar =sumar;
calculadora.restar = restar;
calculadora.multiplicar =multiplicar;
calculadora.dividir= dividir;

module.exports= calculadora;