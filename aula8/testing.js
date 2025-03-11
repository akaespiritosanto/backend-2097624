var fs = require("fs");

function testing(){
    fs.appendFile("aula8", "testing", function (err){
        if (err){
            console.log(err)
        }
    })
}

