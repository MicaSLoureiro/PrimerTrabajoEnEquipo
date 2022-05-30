let suma = require('./resta')
let resta = require('./suma')

let process = require('process');
let operacion = process.argv[2]
let num1 = process.argv[3]
let num2 = process.argv[4]


num1 = +num1
num2 = +num2



switch (operacion) {
     case 'suma':
         console.log(suma(num1, num2))
        break;
    case 'resta':
        console.log(resta(num1, num2))
           break;
    default: 
    console.log('No se encuentra la operación solicitada');
        break;
}
