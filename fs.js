let fs = require ("fs");

fs.writeFile("./texto.txt", "linea uno", function (err){
    if (err){
        console.log("error")
    } 
    console.log("Archivo Creado ");
    
    
})
  