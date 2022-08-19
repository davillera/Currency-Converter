const divisas = [
    {
        "nombre": "Dólar",
        "abreviacion": "USD",
        "precio": "4372",
    },
    {
        "nombre": "Euro",
        "abreviacion": "EUR",
        "precio": "4453",
    },
    {
        "nombre": "Dólar Candiense",
        "abreviacion": "CAD",
        "precio": "3410",
    },
    {
        "nombre": "Peso Argentino",
        "abreviacion": "ARS",
        "precio": "33",
    }
]

let objJSON = JSON.parse(divisas);

const objString = JSON.stringify(objJSON)

console.log(objJSON);

function checkeo(){
    let importe = parseFloat(document.getElementById("importe").value)
    let divisaDestino = document.getElementById("divisaDestino")
    localStorage.setItem("importe", importe)
    if(divisaDestino.value == "USD"){
        document.getElementById("resultado").innerHTML = importe + " Pesos Colombianos son: " + calculoUSD(importe, divisas[0].precio)
    }
    else if(divisaDestino.value == "CAD"){
        document.getElementById("resultado").innerHTML = importe + " Pesos Colombianos son: " + calculoCAD(importe, divisas[1].precio)
    }
    else if(divisaDestino.value == "EUR"){
        document.getElementById("resultado").innerHTML = importe + " Pesos Colombianos son: " + calculoEUR(importe, divisas[2].precio)
    }
    else if(divisaDestino.value == "ARS"){
        document.getElementById("resultado").innerHTML = importe + " Pesos Colombianos son: " + calculoARS(importe, divisas[3].precio)
    }

}

function calculoUSD(importe, USD){
    return (importe/USD).toFixed(2) + " Dólares Americanos";
}
function calculoEUR(importe, EUR){
    return (importe/EUR).toFixed(2) + " Euros";
}
function calculoCAD(importe, CAD){
    return (importe/CAD).toFixed(2) + " Dólares Candienses";
}
function calculoARS(importe, ARS){
    return (importe/ARS).toFixed(2) + " Pesos Argentinos" ;
}