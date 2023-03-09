const logger=require("./logger");

function dividir(a,b){
    if (b!==0)    return a/b;
    throw new Error("No se puede dividir por cero ");
}

try{
    const resultado=dividir(2,0);
    console.log(resultado);
}
catch(e) {
    logger.error(e.toString());
}


