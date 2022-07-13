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
let monto = parseFloat(prompt("Indica la cantidad del crédito"));
let numCuotas = parseInt(prompt("Indica el número de cuotas"));
let tem = parseFloat(prompt("Indica el porcentaje de interés Mensual (En porcentaje)"));
tem = tem/100

let precioCuotas = (monto * (tem * (Math.pow((1+tem),numCuotas))))/(Math.pow((1+tem),numCuotas)-1)
precioCuotas = precioCuotas.toFixed(0)
let montototal = precioCuotas * numCuotas

alert("Tendrás "+numCuotas+" cuotas de "+precioCuotas+"$ cada una, con una deuda total de " + montototal + "$")