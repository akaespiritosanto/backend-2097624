function calculate(val1,val2,op){
    if (op == "+")
     return val1 + val2
    else if (op == "-")
     return val1 - val2    
    else if (op == "/")
     return val1 / val2
    else if (op == "*")
     return val1 * val2
}

var x = calculate(2,3,"+")
console.log(x)