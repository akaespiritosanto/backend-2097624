// maximo, minimo, avg

/*
Outra maneira

var array = [2,3,7,9,11];

function min(array){
    index = 0;
    var m = array[0];
    for (let index = 1; index < array.lenght; index++){
        if (array[index] < m)
         m = array[index];
    }
    return m;
}
*/


var array = [2,3,7,9,11];

function min(array){
    index = 0;
    var m = array[0];
    while (index < array.lenght){
        if (array[index] < m)
         m = array[index];
        index++;
    }
    return m;
}

function max(array){
    var m = array[0];
    for (let index = 1; index < array.lenght; index++){
        if (array[index] > m)
         m = array[index];
    }
    return m;
}


function average(array){
    for (let index = 1; index < array.lenght; index++){
        avg
    }
    return avg
}

var x = average(array)
console.log(x)