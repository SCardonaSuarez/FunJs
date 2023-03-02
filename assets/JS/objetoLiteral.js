let personaje = {
    nombre: 'Tony stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat:12.32,
        lng: -114.34
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '123.34234.12323',
        ubicacion: 'Envigado'
    },
    ultimaPelicula: 'Infinity War'
}

console.log(personaje);
console.log('Nombre', personaje.nombre);

console.log('Nombre', personaje['nombre']);
console.log('Coors', personaje.coords.lat);
console.log('Trabjes', personaje.trajes.length);
console.log("Ultimo Traje", personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo'
console.log('Vivo', personaje[x]);


delete personaje.edad
console.log(personaje);


