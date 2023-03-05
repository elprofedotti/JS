let string =`Helito es la mejor de todas, la amo mucho`;
let string2=[];
for (let i=0;i< string.length;i++){
    string2.push([i, string.charAt(i)]);
}
console.log(string2);
console.log(string.length);
console.log(string.charAt(3));
console.log(string2[3]);
console.log(string.split(" "));
let cadena;
//alt+z --> acomoda el codigo para verse todo por pantalla agregando saltos dde linea
cadena="asdfasdfasdvaspdo aos v oasidjfpoaijsdopf a sopdfijapsodfi jasdof ofa sfd asdf, asdfasdfasdvaspdo aos v oasidjfpoaijsdopf a sopdfijapsodfi jasdof ofa sfd asdf, asdfasdfasdvaspdo aos v oasidjfpoaijsdopf a sopdfijapsodfi jasdof ofa sfd asdf";

console.log(cadena);

//reemplaza la primer coincidencia
console.log(cadena.replace("od","***"));

//reemplaza todas las coincidencias
console.log(cadena.replace(/od/g,"***"));

