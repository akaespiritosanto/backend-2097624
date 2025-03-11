// Criar quadrado com asteriscos

function quadrado(altura, largura){
    var str = "*";
    var line = "";
    var column = "";
    for (let i = 0; i < largura; i++){
        line += str;
    }
    for (let j = 0; j < altura; j++){
        console.log(line)
    }
}

quadrado(10,20)