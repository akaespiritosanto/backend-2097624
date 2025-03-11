// função que devolve a soma dos n números inteiros

/*
Versão incorreta:

function somaInt(n, limite){
    var contagem = 0;
    var soma = n;
    while (contagem < limite){
        var contagem = contagem + 1;
        var soma = soma + n;
        console.log(soma - 1);
    }
}

somaInt(1,20)   
*/

function sum(val){
    var res = 1;
    for (var i=2; i<=val; i++)
     res += i;
    return res;
}

var x = sum(3)
console.log(x)

