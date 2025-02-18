
var array = [9,7];

function a(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < i.length; j++){
            var soma = j++;
            console.log(soma);
        }
    }
}

// x = a(array)
// console.log(x)


function indexOf(array, value){
    var index = -1;
    for (let i = 0; i < array.length; i++){
        if (array[i] == value){
            return i;      
            break;
        }
    }
    return -1;
}


function subArray(array, start, end){
    var sub = []
    for (i=start; i <= end; i++){
        sub.push
    }
}


var a1 = [1,2,3]
var a2 = [1,3,4,4]

function isSameLength(a1, a2){
    return a1.length == a2.length, true
}




function reverse(array){
    var rev = []
    for (var i = array.length - 1; i > 0; i--){
        rev.push(array[i]);
    }
    return rev
}


function swap(array, index1, index2){
    var temp = array[index1];
    array[index1] = array[index2]
    array[index2] = temp;
}



function contains(array, value){
    for (i = 0; i < array.length; i++){
        if (array[i] == value)
        return true;
    }
}


function concatenate(a1, a2){
    var copy = a1.copyWithin(0);
    for (let i = 0; i < a2.length; i++){
        copy.push(a2[i]);
    }
    return copy;
}

