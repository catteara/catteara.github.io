const latitude = document
  .getElementById("town-page")
  .getAttribute("latitude");

const longitude = document
  .getElementById("town-page")
  .getAttribute("longitude");

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=9f6e867aadd6669d3ad428534541ab88&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp').textContent = Math.round(jsObject.current.temp); //Current Temperature
 
    const desc = jsObject.current.weather[0].description;  
    document.getElementById('current').textContent = desc; //Current Weather Description

    document.getElementById('high').textContent = Math.round(jsObject.daily[0].temp.max); //High Temperature

    document.getElementById('humidity').textContent = jsObject.current.humidity; //Humidity

    document.getElementById('windSpeed').textContent = Math.round(jsObject.current.wind_speed); //Wind Speed
 
var temp = jsObject.current.temp;
var windSpeed = jsObject.current.wind_speed;

    if(temp > 50.0 || windSpeed < 3.0) {
        document.getElementById("windChill").innerHTML =  " 0";
    } else {
        var math = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));
        document.getElementById("windChill").innerHTML =  math;
    };

});

