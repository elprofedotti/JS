const array=[1,5,4,8,7,9,7,9,"y",3,5,9,5,9,4,1,6,8,5,"hola","heloise","matias","Hola"];

const miSet=new Set(array);

console.log(array);
console.log(array.length);
console.log(miSet);
console.log(miSet.size);
miSet.add("madhav");
console.log(miSet);
console.log(miSet.size);
miSet.add(9);//no lo agrega
console.log(miSet);
console.log(miSet.size);

miSet.delete(9);
console.log(miSet);
console.log(miSet.size);
miSet.delete("hola");
console.log(miSet);
console.log(miSet.size);

//miSet.clear();
console.log(miSet);
console.log(miSet.size);

console.log(array.includes("hola"));
console.log(miSet.has("hola"));

//recorro el set, igual q las listas

miSet.forEach(valor=>{
   console.log(valor); 
});

//crear objeto iterator desde el set
let it_miSet=miSet.values();
console.log(it_miSet);
//abajo vemos q no podemos acceder a una posicion
console.log(it_miSet[3]); 
//para eso, lo definimos con una propagacion, ahora si podemos acceder a la posicion
it_miSet=[...miSet];
console.log(it_miSet[3]);

//*****************OBJETOS */

const obj={
    id:1,
    nombre:"Heloise",
    apellido:"Dotti",
    esDesarrollador:true,
    librosFav: ["el principito", "mi angelito"],
    "4-juegos": ["EOE","Assasin","One","Fiurer"]
};

console.log(obj.apellido);
console.log(obj["apellido"]);
console.log(obj["4-juegos"]);
console.log(obj.esDesarrollador);

const prop="nombre";
console.log(obj[prop]);

const obj1=obj //copia la referencia en memoria, o sea q si cambio algo de un objeto afecta al otro
obj1.apellido="Dotto";
console.log(obj.apellido);

//para hacer una copia se hace propagando entre llaves
const obj3={...obj1}
obj3.apellido="Dotti Villasanti";
console.log(obj3.apellido);
console.log(obj1.apellido);

//ordeno lista de objetos
let listaPelis=[
    {titulo:"Corazon valiente",director:"NN",anyo:1990},
    {titulo:"harry potter",director:"XX",anyo:2012},
    {titulo:"el robo perfecto",director:"FF",anyo:2015},
    {titulo:"plan ferpecto",director:"ZZ",anyo:2010},
];
console.log(listaPelis);
listaPelis.sort((a,b)=>a.anyo-b.anyo);//sort muta el valor de la lista original
console.log(listaPelis);









