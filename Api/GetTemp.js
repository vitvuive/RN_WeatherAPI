const URL = 'http://api.openweathermap.org/data/2.5/find?q=';
const API = '&units=metric&appid=94b6ce0f1099e9dc725ab6ac75e6f0e6';

function getTemp(cityName){
    return fetch (URL+cityName+API)
    .then (res => res.json())
    .then(resJSON => resJSON.list[0].main.temp);
}

export default getTemp;