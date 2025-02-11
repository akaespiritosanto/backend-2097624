// Devolver o número de vogais de uma frase ==> não está funcionando


function vogais(){
    var frase = "Hoje e domingo"
    var count = 0
    frase = frase.toLowerCase
    for (let i = 0; i < frase.length; i++){
        for (let j = 0; j < vogais.length; j++){
            if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u")
             count++
        }
    }
    return count
}

var x = vogais()
console.log(x)

