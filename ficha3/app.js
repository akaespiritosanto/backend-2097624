
function update(){
    for (let i = 0;i <= 100;i++){
        console.log(i,"% of Download")
    }
}

var update = update();

function started(update){
    return update
}

function complete(){
    return "[ Download Complete! ]"
}

var started = started();
var complete = complete();

function performDownload(started, update, complete){
    console.log()
    return started, update, complete
}

var x = performDownload(started, update, complete);
console.log(x);


