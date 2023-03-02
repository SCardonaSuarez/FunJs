let juegos = ['Zelda', 'Mario', 'Metroid', 'Chorno']

console.log('Largo:', juegos.length);

let primero = juegos[0]
let ultimo = juegos[juegos.length - 1]
console.log(primero, ultimo);


juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
})

let nuevoP = juegos.push('F-Zero')

console.log(nuevoP, juegos);

nuevoP = juegos.unshift("Fire Embleme");

console.log(nuevoP, juegos);


let juegoBorrado = juegos.pop()

console.log(juegoBorrado, juegos);



let pos = 1

console.log(juegos);

let juegosBorrados = juegos.splice(pos ,2)

console.log({juegoBorrado, juegos});




let metoridIndex = juegos.indexOf('Metroid')
console.log(metoridIndex);


let miCesta = ['Tomates', 'Cebolla', 'Pepino', 'Banano']

miCesta.push('Manzana')
miCesta.unshift('Naranja')
miCesta.pop()
console.log(miCesta);

let mercado = miCesta.forEach((elemento, indice, arr)=>{
    console.log(elemento, indice, arr);
})
