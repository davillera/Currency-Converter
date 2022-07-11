function calcular(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    altura = altura/100
    let imc = peso/Math.pow(altura,2)
    imc = imc.toFixed(1)
    let resultado
    if (imc < 18){
        resultado = ("A comer más Mi rey xd")
    }
    else if (imc > 18 && imc < 25){
        resultado = ("Estás bien rey, sigue así xd")
    }
    else if( imc > 25){
        resultado = ("Hey loco que pasa Valemia, deja de comer y ponte a hacer ejercicio")
    }
    document.getElementById("resultado").innerHTML = "Tu IMC es de "+imc+", "+ resultado
}
