let fs = require('fs')
let archivoJson = require ('./app-tareas/tareas.json')
let guardarTareasJson = (dato) =>fs.writeFileSync('./app-tareas/tareas.json',JSON.stringify(dato),'utf-8')


module.exports = {
    listar : archivoJson,
    listarFor:() => {
        for (let i = 0;  i < archivoJson.length; i++){
            console.log(`${i+1} - ${archivoJson[i].titulo} ${archivoJson[i].estado}`);
        }
    },
    agregar: (titulo,estado)=>{
        let tareaNueva = {
            titulo,
            estado,
        }
        archivoJson.push(tareaNueva)
        guardarTareasJson(archivoJson)
        return archivoJson


    }
}

