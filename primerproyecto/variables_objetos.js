obj={"nombre":"Matias", "edad":43}

estado=true

if((typeof estado)==="number"){
    console.log("Aca estoy");
}else{console.log("ahora toy aca");}

const movil={
    altura:12,
    anchura:6,
    marca:"motorola",
    contactos:["mati","Helo"],
    tarjeta: {
        marca:"Sony",
        capacidad:128
    },
    liberado:false,
}
i=1
console.log(movil.contactos[i].includes("H"));
movil.anyo=2014;
console.log(movil.anyo);
//par atrabajar con fechas --> Moment.js

const ahora =new Date();
// console.log(ahora);
// const fecha_milis=new Date(10);
// console.log(fecha_milis);
// const fecha_cadena = new Date("December 11");
// console.log(fecha_cadena);
// const fecha_valores= new Date(2016,1,29)
// console.log(fecha_valores);

const dia=ahora.getDate();
const mes=ahora.getMonth()+1;
const anio=ahora.getFullYear();

// console.log(anio);
// console.log(dia);
console.log(mes);

console.log(movil.liberado);
movil.liberado=true;
if(movil.liberado){
    console.log("toy aca");
}else{console.log("Toy aca ahora");}
