var fs = require("fs");
var Perro = require("./Perro");

console.log("hola");
fs.readFile("README.txt","utf-8", function(err,data){
    if(err){
        return console.error(err);
    }

    console.log(data);
});

console.log("carlos");

var perro=new Perro("");
perro.mover("cola",function(error, data1, data2, data3, data4){
    if(error){
        console.log(error.message);
        return;
    }
    else{
        console.log(data1, data2, data3, data4);
    }
});
