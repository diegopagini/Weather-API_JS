const APIkey = "9eec655c6fd34430a775dd9fd71dd384"

function getApi(CP) {
  apiData = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${APIkey}&postal_code=${CP}`)
  .then((response) => response.json())
  .then((data) => {
    currentData = data.data
    console.log(currentData)
    showDate(0, 'cp')
    showTemp(0, 'temp')
    showRH(0, 'rh')
    showClouds(0, 'clouds')
    showRain(0, 'rain')
    showMaxTemp(0, 'max')
    showMinTemp(0, 'min')
    showDate(1,'dateFirst')
    showTemp(1, 'tempFirst')
    showDate(2, 'dateSecond')
    showTemp(2, 'tempSecond')
    showDate(3, 'dateThird')
    showTemp(3, 'tempThird')
    showDate(4, 'dateFourth')
    showTemp(4, 'tempFourth')
    showDate(5, 'dateFifth')
    showTemp(5, 'tempFifth')
  })
}
getApi(7600)

//Mostrar fecha actual
function showDate(i, id){
  cp = `
    <h3>${currentData[i].datetime}</h3>
  `
  document.getElementById(id).innerHTML = cp;
}

//Mostrar temperatura actual
function showTemp(i, id){
  temp = `
  <h2 class="center">${currentData[i].temp} °</h2>
  `
  document.getElementById(id).innerHTML = temp;
}

//Mostrar la humedad actual
function showRH(i, id){
  rh = `
  ${currentData[i].rh} % de humedad
  `
  document.getElementById(id).innerHTML = rh;
}

//Mostrar la nobosidad actual
function showClouds(i, id){
  clouds = `
  ${currentData[i].clouds} % de nubosidad
  `
  document.getElementById(id).innerHTML = clouds;
}

//Mostrar la probabilidad de lluvia actual
function showRain(i, id){
  rain = `
  ${currentData[i].precip} % de que llueva
  `
  document.getElementById(id).innerHTML = rain;
}

//Mostrar la temperatura maxima
function showMaxTemp(i, id){
  max = `
  ${currentData[i].app_max_temp} ° de máxima
  `
  document.getElementById(id).innerHTML = max;
}

//Mostrar la temperatura minima
function showMinTemp(i, id){
  min = `
  ${currentData[i].app_min_temp} ° de mínima
  `
  document.getElementById(id).innerHTML = min;
}