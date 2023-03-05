const array=[9,8,7,5,4,6,2,1,3];
console.log(array.length);
console.log(array);
//elimino
array.splice(2,2);
console.log(array.length);
console.log(array);

//agrego al final
array.push(5);
console.log(array.length);
console.log(array);

//agrego al inicio
array.unshift(7);
console.log(array.length);
console.log(array);

//elimino el ultimo
array.pop();
console.log(array.length);
console.log(array);

//elimino el primero
array.shift();
console.log(array.length);
console.log(array);

//agrego
array.splice(6,0,5);
console.log(array.length);
console.log(array);
array.splice(6,0,5);
console.log(array.length);
console.log(array);
array.splice(9,0,"ultimo")
console.log(array.length);
console.log(array);

//modifico
array.splice(9,1,"jj")
console.log(array.length);
console.log(array);

//concatenar
let array2=["a","b","c"];

console.log(array2.concat(array));
let array3=array2.concat(array);
//factor propagacion (se utiliza en listas y en objetos)
console.log(...array3);

let array4=[...array2, ...array];
console.log(array4);

//error de concepto de propagacion --- lo de abajo genera una lista con dos elementos, cada uno de esos elementos es una lista
let array5=[array2, array];
console.log(array5);

//obtener una lista a partir de otra
//indice desde (lo incluye) indice hasta (no lo incluye)
console.log(array4);
console.log(array4.slice(1,3));
console.log(array4.slice(0));
console.log(array4.slice(5));
//podemos indicarle el hasta desde el final, con negativo
console.log(array4.slice(0));
console.log(array4.slice(0,-2));

//iterar listas
//menos eficiente
for (let i=0;i<array4.length;i++){
    console.log(array4[i]);
}
//mas eficiente el foreach
array4.forEach(valor=>{
    //devuelvo el valor, o el resultado en caso que haga algo con ese valor
    console.log(valor+1);
    }
);

//buscar un valor
array4.push("a");
console.log(array4);
let valor_buscado=5;
let busqueda= array4.find(valor=>{
    //aca especifico
    if(valor===valor_buscado) return "estamos bien";//atento q no devuelve el string, sino el valor.... loco no?
    }
    );
console.log(busqueda);

const listaObjetos=[
    {nombre: "Matias", edad: 43},
    {nombre: "Helito", edad: 4},
    {nombre: "Semilla", edad: 35}
];

const objeto=listaObjetos.find(obj=>{
    if(obj.nombre==="Helito")return true;
    
});
if (!objeto){console.log("nada");}
else{
console.log(objeto);
console.log(objeto.edad);
}

//ahora mejor hecho
const objeto2=listaObjetos.find(obj=>{
    return obj.nombre==="Helito";
});
console.log(objeto2);
console.log(objeto2.edad);
//y mas resumido aun
const objeto3=listaObjetos.find(obj=>obj.nombre==="Helit");
if (objeto3)console.log(objeto3.edad);
else console.log("No encontrado");

//si quiero obtener solo la edad, en este ejemplo, mas efficiento seria: (pero atento a q si no encuentra, tira error de destructure)
const {edad}=listaObjetos.find(obj=>obj.nombre==="Helito");
if(edad)console.log(edad);
else console.log("No encontrado");

//en este ultimo caso habria q chequearlo .. COMO??
const {edad2}=listaObjetos.find(obj=>{
    if (obj.nombre==="Helito") return true;
    else return false;
    }
); //mmmm averiguar como

//metodos map() filter() reduce()

const array6=["neuquen","cordoba","buenos aires","santa fe","chubut","santa cruz","la pampa","misiones"];
console.log(array6);
console.log(array6.length);
console.log(typeof array6[0]);

const res = array6.forEach(valor=>{ 
    return valor;
});
res;

const nuevoArr =array6.map((valor, i)=>{
    //return i+1+"- "+valor;
    return `${i+1} - ${valor}`
});

console.log(nuevoArr);

//optimizamos
const nuevoArr2 =array6.map((valor, i)=>`${i+1} - ${valor}`);

console.log(nuevoArr2);

let listaObjetos2=[
    {nombre: "Matias", edad: 43},
    {nombre: "Helito", edad: 4},
    {nombre: "Semilla", edad: 35},
    {nombre: "facundo", edad: 5}
];

//filter
const personasMayores=listaObjetos2.filter(obj=>{
    if (obj.edad>30)return true;
    else return false;
});
console.log(personasMayores);

const personasMenores=listaObjetos2.filter(obj=>obj.edad<18);

console.log(personasMenores);

// atentos al reduce
let valores=[1,2,3,4,5,6,7,8,9];
var suma=0;
suma=valores.reduce((acumulado, cur, i, orig)=>{
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(orig);
    return acumulado+=cur;
});
console.log(suma);
console.log(valores);
suma=valores.reduce((acumulado,cur )=>{
    console.log(acumulado);
    console.log(cur);
    return acumulado+=cur;
});
console.log(suma);
valores=[9,7,5,4,8,6,2,1,3];
//ordenacion
console.log(valores);

valores.sort((a,b)=>{
    //invierte el orden
    return -1;
});

console.log(valores);
console.log(valores[valores.length-1]);

let cadena="Hola soy Madhav";
console.log((cadena.split("")).sort((a,b)=>{
    return -1;
}));
//doy vuelta cadena
let anedac=(cadena.split("")).sort((a,b)=>{
    return -1;
}).join("");
//volvemos a valores
//ordeno de menor a mayor
console.log(valores);
valores.sort((a,b)=>{
    if (a<b)return -1;
    else return +1;
});
console.log(valores);

//ordeno de mayor a menor
console.log(valores);
valores.sort((a,b)=>{
    if (a<b)return +1;
    else return -1;
});
console.log(valores);

//mas efectivo cuando son array numericos
valores=[9,4,5,8,7,6,1,2,3];
console.log(valores);
console.log(valores.sort((a,b)=>a-b));
console.log(valores.sort((a,b)=>b-a));

//si quiero devolver el numero de mayor valor, una forma seria ordenar, y devolver el ultimo o el primero, segun el orden

console.log(`el mayor valor de la lista "valores" es ${valores[0]}`);

console.log(`El mayor valor de la lista "valores" es ${(valores.sort((a,b)=>a-b))[valores.length-1]}`);

//ahora vamos con un array de objetos, usamos el q teniamos
listaObjetos2.sort((a,b)=>{
    if(a.edad<b.edad) return 1;
    else if (a.edad>b.edad) return -1;
    else return 0;
});
console.log(listaObjetos2);

console.log(listaObjetos2.sort((a,b)=>a.edad-b.edad));

//comparacion
//retomamos lista valores
console.log(valores);
valores.splice(3,0,5,7,8,9,6,5,4,8,5,6,5,-41);
console.log(valores.length);
console.log(valores);
//vamos con every()
let resultado=valores.every(valor =>{
    if (typeof valor!="string") return true;
    else return false;
});

console.log(resultado);

//mas sencillo
resultado=valores.every(valor =>valor>-50);
console.log(resultado);

//ahora a comparar
//genero una funcion propia a la moderna

const compararArray=(array_1, array_2)=>{
    if(array_1.length!==array_2.length)return false
    const resultado=array_1.every((valor,i)=>{
        if(valor===array_2[i]) return true
    });
    return resultado;
};

const compararArray2=(array_1, array_2)=>{
    if(array_1.length!==array_2.length)return false
    const resultado=array_1.every((valor,i)=> valor===array_2[i]);
    return resultado;
};

let arr_1=[1,5,4,7];
let arr_2=[1,5,4,7];

console.log(compararArray2(arr_1,arr_2));
console.log(compararArray(arr_1,arr_2));

//hasta aca, vimos que todos cumplan determinada condicion, con el every
//ahroa veremos si alguno, con el some

console.log(array);
resultado=array.some(valor=>{
    if(valor===1)return true;
    return false;
});

console.log(resultado);

resultado=array.some(valor=>valor===10);

console.log(resultado);

let nombreBuscado="Semilla";
console.log(listaObjetos2.some(valor=>valor.nombre===nombreBuscado));

//obtener una lista a partir dde un objeto iterable
let cadenaNueva="Soy una cadena, un string, o sea un objeto iterable";

const arr_str = Array.from(cadenaNueva);
console.log(arr_str);
console.log(arr_str.length);
console.log(cadenaNueva.length);
console.log(arr_str.join(""));
console.log(cadenaNueva);

const keys=arr_str.keys();
console.log(keys);

const arr_keys = Array.from(keys);
console.log(arr_keys);
console.log(arr_keys.length);
