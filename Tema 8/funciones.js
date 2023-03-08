function imprimir(...param){
    console.log(param);
}

imprimir("Matias", "helo", "semi",{Nombre:"Mati", edad: 43},[2,3,4,]);

function suma(...nums){
    return nums.reduce((a,b)=>a+b);
}

const s= suma(1,2,3,4,5);

console.log(s);

// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((valor) => valor * 2)

console.log(array2)

// const dobleDelValor = valor => {
//     return valor * 2
// }
const dobleDelValor = valor => valor * 2

console.log(doble(6))
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor)

console.log(array3)

function doble(valor) {
    return valor * 2
}

// Funciones asíncronas

function miAsinc() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    console.log(i);
    // Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})


miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

//funciones generadoras

function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

