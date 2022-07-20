//Función de calcular IMC

// function calcular(){
//     let altura = document.getElementById("altura").value
//     let peso = document.getElementById("peso").value
//     altura = altura/100
//     let imc = peso/Math.pow(altura,2)
//     imc = imc.toFixed(1)
//     let resultado
//     if (imc < 18){
//         resultado = ("A comer más Mi rey xd")
//     }
//     else if (imc > 18 && imc < 25){
//         resultado = ("Estás bien rey, sigue así xd")
//     }
//     else if( imc > 25){
//         resultado = ("Hey loco que pasa Valemia, deja de comer y ponte a hacer ejercicio")
//     }
//     document.getElementById("resultado").innerHTML = "Tu IMC es de "+imc+", "+ resultado
// }

//Ciclo For Desafio Complementario
// let num = parseInt(prompt("Número de repeticiones"));
// num = num + 1

// for( let i = 1; i < num; i++){
//     console.log("hello "+ i);
// }


//Simulador de pagos de cuotas de credito

function calcular(monto, tem, numCuotas){
    return (monto * (tem * (Math.pow((1+tem),numCuotas))))/(Math.pow((1+tem),numCuotas)-1)
}

let monto = parseInt(prompt("Indica la cantidad del crédito"))
while(isNaN(monto)){
    alert("Escribe una cantidad válida")
    monto = parseInt(prompt("Indica la cantidad del crédito"));
}
let numCuotas = parseInt(prompt("Indica el número de cuotas"));
while(isNaN(numCuotas)){
    alert("Escribe una cantidad válida")
    numCuotas = parseInt(prompt("Indica el número de cuotas"));
}

let tem = parseFloat(prompt("Indica el porcentaje de interés Mensual (En porcentaje)"));
while(true){
    if (isNaN(tem)){
        alert("Escribe una cantidad válida")
        tem = parseFloat(prompt("Indica el porcentaje de interés Mensual (En porcentaje)"))
    }else{
        break
    }
    
}
tem = tem/100

let precioCuotas = calcular(monto, tem, numCuotas).toFixed(1)

let montototal = precioCuotas * numCuotas

alert("Tendrás "+numCuotas+" cuotas de "+precioCuotas+"$ cada una, con una deuda total de " + montototal + "$")