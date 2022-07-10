let altura = parseInt(prompt("Cuanto Mides?(Centímetros)"));
let peso = parseInt(prompt("Cuanto pesas? (Kilogramos)"));

altura = altura/100

let imc = (peso/Math.pow(altura,2));

imc = Math.round(imc);
if (imc < 18){
    comentario = ("A comer más Mi rey xd")
}
else if (imc > 18 && imc < 25){
    comentario = ("Estás bien rey, sigue así xd")
}
else if( imc > 25){
    comentario = ("Hey loco que pasa Valemia, deja de comer y ponte a hacer ejercicio")
}
alert("Tu IMC es de "+ imc +", " + comentario)

