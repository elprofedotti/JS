let obj={
    nombre:"Matias",
    apellido:"Dotti",
    edad: 43,
    altura: 1.80,
    esDev:true
};

console.log(obj);

let miEdad=obj.edad;


let lista=[
    {...obj},
    {
        nombre:"Mauro",
        apellido:"Dadamo",
        edad: 47,
        altura: 1.70,
        esDev:false
    },{
        nombre:"Galle",
        apellido:"Isola",
        edad: 45,
        altura: 1.70,
        esDev:false
    }
];

console.log(lista);

let listaOrdenada=lista;

listaOrdenada.sort((a,b)=>b.edad-a.edad);
console.log(listaOrdenada);