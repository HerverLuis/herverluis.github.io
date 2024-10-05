let valor1 = '';
let valor2 = '';
let operacion = '';
let resultadoMostrado = false;

function appendNumber(numero) {
    const display = document.getElementById('resultado');
    
    if (resultadoMostrado) {
        display.value = '';
        resultadoMostrado = false;
    }
    
    display.value += numero;
}

function setOperation(oper) {
    const display = document.getElementById('resultado');
    
    if (valor1 === '') {
        valor1 = display.value;
        operacion = oper;
        display.value = '';
    } else if (!resultadoMostrado) {
        valor2 = display.value;
        calculateResult();
        valor1 = display.value;
        operacion = oper;
        resultadoMostrado = false;
    }
}

function calculateResult() {
    const display = document.getElementById('resultado');
    valor2 = display.value;
    let resultado = 0;

    switch (operacion) {
        case '+':
            resultado = parseFloat(valor1) + parseFloat(valor2);
            break;
        case '-':
            resultado = parseFloat(valor1) - parseFloat(valor2);
            break;
        case '*':
            resultado = parseFloat(valor1) * parseFloat(valor2);
            break;
        case '/':
            resultado = parseFloat(valor1) / parseFloat(valor2);
            break;
    }

    display.value = resultado;
    valor1 = resultado;
    resultadoMostrado = true;
}

function clearScreen() {
    document.getElementById('resultado').value = '';
    valor1 = '';
    valor2 = '';
    operacion = '';
}
