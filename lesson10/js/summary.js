const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9f6e867aadd6669d3ad428534541ab88';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp').textContent = jsObject.main.temp; //Current Temperature
 
    const desc = jsObject.weather[0].description;  
    document.getElementById('current').textContent = desc; //Current Weather Description

    document.getElementById('high').textContent = jsObject.main.temp_max; //High Temperature

    document.getElementById('humidity').textContent = jsObject.main.humidity; //Humidity

    document.getElementById('windSpeed').textContent = jsObject.wind.speed; //Wind Speed
  });