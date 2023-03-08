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

//funcino generadora de indices pares
function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}
const gen=idsPares();
console.log(gen.next());
console.log(gen.next());

