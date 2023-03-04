// Casos muy especificos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
	if (lista[i] === 3) {
		continue;
	}

	console.log(lista[i]);

	if (lista[i] > 5) {
		break;
	}
}

// cual es el ambito de un bucle.
var j = 50;
const k = 10;
console.log(i);
console.log(j);
console.log(k);