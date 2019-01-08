const lugar =  require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').option({
    direccion:{
        alias: "d",
        descripcion: "direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

let getInfo = async (dir) =>{
    try {
        let coords =await lugar.getLugarLatLng(dir);
        let temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima en ${coords.direccion} es de ${temp} °C`
    } catch (error) {
        return `No se pudo obtener el clima de: ${dir}`
    }
   
}
getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(e => console.log(e))
