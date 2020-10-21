// API
const API = "https://api.weatherbit.io/v2.0/current";
const KEY = "?key=f3acb947fe9a4601aaca23a79e0e7bb4";
let CP = "&postal_code=${postalCode}";
// fetch(`${API}${KEY}${CP}`) esto asi no anduvo

let postalCode = 7600;
getCurrentWeather(postalCode);

function getCurrentWeather(postalCode) {
  dataEndpoint = fetch(`https://api.weatherbit.io/v2.0/current?key=f3acb947fe9a4601aaca23a79e0e7bb4&postal_code=${postalCode}`)
  .then(response => response.json())
  .then(dataWeather => {
    let currenDataTime = dataWeather.data;
    console.log(currenDataTime);

    document.getElementById('city-name').innerHTML = currenDataTime[0].city_name;
    document.getElementById('date').innerHTML = currenDataTime[0].datetime;
    document.getElementById('temp').innerHTML = `Temperatura: ${currenDataTime[0].temp}`;
    document.getElementById('weather').innerHTML = `Clima: ${currenDataTime[0].weather.description}`;
    document.getElementById('clouds').innerHTML = `Nubes: ${currenDataTime[0].clouds}`;
    document.getElementById('rain').innerHTML = `Lluvia: ${currenDataTime[0].precip}`;


  })
}

document.getElementById('getWeather').addEventListener('click', function() {
  postalCode = document.getElementById('cp').value;
  getCurrentWeather(postalCode);
})