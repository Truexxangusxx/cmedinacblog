var fs = require("fs");

fs.readFile("README.txt","utf-8", function(err,data){
    if(err){
        return console.error(err);
    }

    console.log(data);
});