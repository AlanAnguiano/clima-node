const axios = require('axios');


const getClima = async(lat,lng) =>{
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e7851342b1002d46534e28291cffe0ea`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}