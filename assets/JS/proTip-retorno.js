


// const crearPersona = (nombre, apellido)=> {

//     return {
//         nombre,
//         apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido})

const persona = crearPersona('Santiago', 'Cardona')
console.log(persona);


// const imprimirArgumentos = (edad, ...arg) => console.log({edad, arg}); 
const imprimirArgumentos = (edad, ...arg) => {

    return arg
}





const [casado, vivo, nombre, saludo] = imprimirArgumentos(10,  true, 'Santiago', 'Hola')
console.log(casado, vivo, nombre, saludo);


const {apellido} = crearPersona('Santiago', 'Cardona')
console.log({apellido});


let tony = {
  nombre: "Tony stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};


// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);

// }

const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes}) => {

    console.log('Nombre: ' + nombre);
    console.log("codeName: " + codeName);
    

}

imprimePropiedades(tony)