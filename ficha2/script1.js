// calcular imc (altura em metros)

function imc(peso, altura){
    var indice = peso / (altura)**2;
    if (indice < 18.5){
        console.log("Abaixo do peso")
        return "Índice:", indice
    }
    else if (indice > 18.5 && indice < 25){
        console.log("Peso normal")
        return "Índice:", indice
    }
    else if (indice > 25 && indice < 30){
        console.log("Acima do peso")
        return "Índice:", indice
    }
    else{
        console.log("Obeso")
        return "Índice:", indice
    }
}

var x = imc(20,1.75)
console.log(x)


