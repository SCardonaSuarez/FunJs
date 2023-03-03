


const dia = 6
const horaActual = 13


let horaApertura
let mensaje // Esta abierto, esta cerrado, hoy abrimos a las xx

// if(dia === 0 || dia === 6){
// if([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura = 9
// }
// else
// {
//     console.log('Dia de semana');
//     horaApertura = 11
// }

horaApertura = ([0,6].includes(dia)) ? 11 : 9

// if(horaActual >= horaApertura){
//     mensaje = 'Esta Abierto!'
// }
// else
// {
//     mensaje = `Esta cerrado, abrimos a las ${horaApertura} am`
// }

mensaje = (horaActual >= horaApertura) ? 'Esta Abierto' : `Esta cerrado, abrimos a las ${horaApertura} a.m`


console.log({horaApertura, mensaje});


