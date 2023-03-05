// - Una variable que contenga tu altura en centímetros (entero)
let alturaCm=179;

// - Una variable que contenga tu altura en metros (número de coma flotante)
let alturaM=1.795;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso=72.26;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaUp=alturaM.toFixed(1);
console.log(alturaUp);
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoDown=parseFloat(peso.toFixed(2));
console.log(pesoDown.toPrecision(3));
console.log(pesoDown);
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max=Number.MAX_VALUE+1===Number.MAX_VALUE;
console.log(max);
let max2=Number.MIN_VALUE;
max2;
console.log(max2.toFixed(100));