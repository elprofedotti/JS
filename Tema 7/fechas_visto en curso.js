///Fechas
const fecha=new Date();

console.log(fecha);

//los mees inicializan en 0
const fecha2=new Date(1979,11); //año y mes, obligatorios
console.log(fecha2);

const fecha3=new Date(1979,11,21,21,12,54);
console.log(fecha3);

const fecha4=new Date(0);//fecha a partir de los milisegundos --> podemos poner milisegundos + ó -
console.log(fecha4);

let fecha5=new Date("december 21,1979");
console.log(fecha5);

fecha5=new Date("december 21,1979 21:12:54");
console.log(fecha5);

//comparar fechas
console.log(fecha);
console.log(fecha2);
console.log(fecha>fecha2);

console.log(fecha);
console.log(fecha3);
console.log(fecha>fecha3);

console.log(fecha5);
console.log(fecha2);
console.log(fecha5<fecha2);

//para saber si son iguales, no se comparan directamente, sino que hay q convertirlas a milisegundos
fecha5=new Date(1979,11);
console.log(fecha5);
console.log(fecha2);
console.log(fecha5===fecha2);

console.log(fecha5.getTime());
console.log(fecha2.getTime());
console.log(fecha5.getTime()===fecha2.getTime());

//obterne dia mes anio
//dia
console.log(fecha5.getDate());
//mes, recordemos empiezan desde 0, asiq 11 es diciembre, podemos sumarle uno cualquier cosa
console.log(fecha5.getMonth()+1);
//año
console.log(fecha5.getFullYear());

console.log(fecha3);
//lo anterior es un poco ilegible... podemos mostrar mejor asi:
console.log(fecha3.toLocaleDateString("sd"));
console.log(fecha3.toLocaleDateString("en"));
console.log(fecha3.toLocaleDateString("es"));






