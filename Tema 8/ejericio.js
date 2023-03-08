function siempreVerdadero(){
    return true;
}

console.log(siempreVerdadero());

// async function damePromesa() {
//     return setTimeout(() => console.log("Hola soy una promesa"), 5000)
// }

async function imprimirMensaje() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
}
  
//imprimirMensaje();

imprimirMensaje().then(() => console.log("La promesa se ha resuelto"));


