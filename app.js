let process = require('process')
let tareasJson= require ('./funcionesDeTareas')
//console.log(tareas);

let argv = process.argv

//let listar = tareasJson

 switch (argv[2]) {
    case 'listar':
        console.log("Listado de tareas\n--------\n",tareasJson.listar );
        break;
    case 'listarFor':
    console.log("Listado de Tareas\n---------\n");
    tareasJson.listarFor();
        break;
    case 'agregar':
        let titulo = argv [3]
        let estado = argv [4]
        console.log(tareasJson.agregar(titulo,estado));
        break;
     case  undefined :
        console.log("Atención - Tenés que pasar una acción");
        break;

    default:
        console.log("No entiendo que quieres hacer");
        break;
}
 