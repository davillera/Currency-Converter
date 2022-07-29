//divisas a COP
const USD = 4372;
const EUR = 4453;
const CAD = 3410;
const ARS = 33

let cash;
let resultado;

const divisas = ["USD", "EUR", "CAD", "ARS"]

let objUSD={
    nombre: "Dólar",
    precio: USD,
}
let objEUR={
    nombre: "Euro",
    precio: EUR,
}
let objCAD={
    nombre: "Dólar Candiense",
    precio: CAD,
}
let objARS={
    nombre: "Peso Argentino",
    precio: ARS,
}

let frmoney = parseInt(prompt("A qué divisa vas a convertir? (0 -> USD, 1 -> EUR, 2 -> CAD, 3 -> ARS)")) 
while(isNaN(frmoney)){
    alert("ingresa un número Válido")
    frmoney = parseInt(prompt("A qué divisa vas a convertir? (0 -> USD, 1 -> EUR, 2 -> CAD, 3 -> ARS)"))
}

if (frmoney == 0 ){
    cash = parseFloat(prompt("Cuánto vas a convertir?"))
}else if (frmoney == 1){
    cash = parseFloat(prompt("Cuánto vas a convertir?"))
    calculoEUR();
}else if(frmoney == 2){
    cash = parseFloat(prompt("Cuánto vas a convertir?"))
    calculoCAD();
}else if(frmoney == 3){
    cash = parseFloat(prompt("Cuánto vas a convertir"))
    calculoARS();
}
console.log(cash);
console.log(frmoney);
console.log(resultado);

function calculoUSD(cash, USD){
    resultado = cash/USD + " Dólares";
    return 
}
function calculoEUR(cash, EUR){
    resultado = cash/EUR + " Euros";
    return
}
function calculoCAD(cash, CAD){
    resultado = cash/CAD + " Dólares Candienses";
    return
}
function calculoARS(cash, ARS){
    resultado = cash/ARS + " Pesos Argentinos" ;
    return
}

alert(cash + "$ COP, son "+ resultado);