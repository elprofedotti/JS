// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompras=["papas","calabaza","agua","sal","yerba"];
console.log(listaCompras);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("aceite girasol");
console.log(listaCompras);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop();
console.log(listaCompras);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let listaPelis=[
    {titulo:"Corazon valiente",director:"NN",fecha:"1990-12-21"},
    {titulo:"harry potter",director:"XX",fecha:"2012-12-21"},
    {titulo:"el robo perfecto",director:"FF",fecha:"2015-12-21"},
];
console.log(listaPelis);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let resultado=listaPelis.filter(valor=>valor.fecha>"2013-01-01");
console.log(resultado);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
listaDire=listaPelis.map(valor=>valor.director);
console.log(listaDire);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
listaTit=listaPelis.map(valor=>valor.titulo);
console.log(listaTit);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
resultado=listaDire.concat(listaTit);
console.log(resultado);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
resultado=[...listaDire,...listaTit];
console.log(resultado);
