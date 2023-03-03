

let a = 10

if(a <= 10){
    console.log('A es menor o igual que 10');
}else{
    console.log('A es menor de 10');
}

// console.log('Fin del programa');


const hoy = new Date()

console.log(hoy);

let dia = hoy.getDay()

console.log(dia);

if(dia === 0 ){
    console.log('Domingo');
}else if (dia === 1){
    console.log('Lunes');




}else if(dia === 2){
    console.log('Martes');
}else{
    console.log('No es lunes, martes o domingo...');
}

let day = 3

let dayOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log('Hoy es:',dayOfWeek[dia]);

