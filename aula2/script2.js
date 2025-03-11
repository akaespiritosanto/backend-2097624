// Inverter todas as palavras de uma string


function inverterTexto(){
    var texto = "Hoje é domingo";
    var reversedStr = "";
    var edited = texto.split(" ");
    for (let i = 0; i < edited.length; i++){
        const word = edited[i];
        for (let j = word.length - 1; j >= 0; j--){
            reversedStr+=word[j];
        }
        reversedStr+=" ";
    }
    return reversedStr;
}

console.log(inverterTexto())

