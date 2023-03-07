let hoy=new Date();
let miCumple=new Date("1979,12,21");
console.log(hoy.toLocaleDateString("es"));
console.log(miCumple.toLocaleDateString("es"));

let hoyMasTarde = hoy>miCumple;

console.log(hoyMasTarde);

let diaMiNac=miCumple.getDate();
let mesMiNac=miCumple.getMonth()+1;
let anioMiNac=miCumple.getFullYear();
console.log(diaMiNac);
console.log(mesMiNac);
console.log(anioMiNac);

