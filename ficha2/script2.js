// imprimir todos os multiplos de 5 menores que 20

function multiplos(val,limite){
    var result = 0;
    while (result < limite){
        result = result + val
        console.log(result);
    }
}

multiplos(5,20)