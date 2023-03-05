let str1="Hola, me llamo Heloise.";
let str2="Mi papa se llama Matias, y mi mama Sofia.";


console.log(`${str1} ${str2} Pero todos los 
dias 
soy Helito o Liyin.`);
let res=`${str1} ${str2} Pero todos los 
dias 
soy Helito o Liyin.`
//cuantas veces encuentro la a en res
let carac="u";
let tot=res.match(/a/g);
if(tot){
    console.log(`encontre ${tot.length} veces`);
}else{
    console.log("toy aca");
}

