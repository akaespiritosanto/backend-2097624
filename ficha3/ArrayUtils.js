var arrayUtils= {
    isEmpty: function(array){
        if (array.length == 0){
            return "Is Empty"
        }
        else{
            return "Is not Empty"
        }
    },
    max: function(array){
        var m = array[0];
        for (let index = 1; index < array.lenght; index++){
            if (array[index] > m)
            m = array[index];
        }
        return m;
    },
    min: function(array){
        index = 0;
        var m = array[0];
        while (index < array.lenght){
            if (array[index] < m)
                m = array[index];
                index++;
        }
        return m;
    },
    average: function(array){
        for (i = 0; i < array; i++){
            soma = i++
        }
    },
    indexOf: function(array, value){},
    subArray: function(array, startindex, endindex){},
    isSameLength: function(a1, a2){},
    reverse: function(array){},
    swap: function(array, index1, index2){},
    contains: function(array, value){},
    concatenate: function(a1, a2){},
};

module.exports = arrayUtils;

