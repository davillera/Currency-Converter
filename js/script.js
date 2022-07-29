let cash;
let resultado;

const objUSD={
    nombre: "Dólar",
    abreviacion: "USD",
    precio: 4372,
}
const objEUR={
    nombre: "Euro",
    abreviacion: "EUR",
    precio: 4453,
}
const objCAD={
    nombre: "Dólar Candiense",
    abreviacion: "CAD",
    precio: 3410,
}
const objARS={
    nombre: "Peso Argentino",
    abreviacion: "ARS",
    precio: 33,
}

let frmoney = parseInt(prompt("A qué divisa vas a convertir? (0 -> USD, 1 -> EUR, 2 -> CAD, 3 -> ARS)")) 
while(isNaN(frmoney)){
    alert("ingresa un número Válido")
    frmoney = parseInt(prompt("A qué divisa vas a convertir? (0 -> USD, 1 -> EUR, 2 -> CAD, 3 -> ARS)"))
}

if (frmoney == 0 ){
    cash = parseFloat(prompt("Cuánto vas a convertir?"))
    alert(cash + "$ COP, son "+ calculoUSD(cash, objUSD.precio));
}else if (frmoney == 1){
    cash = parseFloat(prompt("Cuánto vas a convertir?"))
    alert(cash + "$ COP, son "+ calculoEUR(cash, objEUR.precio))
}else if(frmoney == 2){
    cash = parseFloat(prompt("Cuánto vas a convertir?"))
    alert(cash + "$ COP, son "+ calculoCAD(cash, objCAD.precio))
}else if(frmoney == 3){
    cash = parseFloat(prompt("Cuánto vas a convertir"))
    alert(cash + "$ COP, son "+ calculoARS(cash, objARS.precio))
}
console.log(cash);
console.log(frmoney);
console.log(resultado);

function calculoUSD(cash, USD){
    return (cash/USD).toFixed(2) + " Dólares Americanos";
}
function calculoEUR(cash, EUR){
    return (cash/EUR).toFixed(2) + " Euros";
}
function calculoCAD(cash, CAD){
    return (cash/CAD).toFixed(2) + " Dólares Candienses";
}
function calculoARS(cash, ARS){
    return (cash/ARS).toFixed(2) + " Pesos Argentinos" ;
}

alert(cash + "$ COP, son "+ resultado);