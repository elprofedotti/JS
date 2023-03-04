let factorial = 1;
let num = 10;

while (true) {
	factorial *= num;
	num--;
	if (num === 0) {
		break;
	}
}
console.log(factorial);