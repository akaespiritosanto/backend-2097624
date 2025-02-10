// fatorial de um número

function fatorial(val){
    var res = 1;
    for (var i=1; i<=val; i++)
     res *= i;
    return res;
}

var x = fatorial(3)
console.log(x)

