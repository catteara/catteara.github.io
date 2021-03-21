//Used Matt Steele's as a model for how to get the code to recognize the different towns. I liked that this way, I didn't have to have a lot of extra code and it is easy to read. 
const latitude = document.getElementById("town-page").getAttribute("latitude");

const longitude = document.getElementById("town-page").getAttribute("longitude");

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

const cityID = document
  .getElementById("town-page")
  .getAttribute("city-id");

  const URL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=9f6e867aadd6669d3ad428534541ab88&units=imperial`;
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    for (i=0; i < jsObject.list.length; i++) {
        if (jsObject.list[i].dt_txt.includes("18:00:00") == true) {
            
            let div = document.createElement('div');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let image = document.createElement('img');
            let d = new Date(jsObject.list[i].dt_txt);
            let dayName = days[d.getDay()];
           
            p1.textContent = dayName;
            image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
            image.setAttribute('alt', "weather icon");
            p2.textContent = jsObject.list[i].main.temp_max.toFixed(0) + "\xB0" + " F";
            
            div.appendChild(p1);
            div.appendChild(image);
            div.appendChild(p2);
            
            
            document.querySelector('div.forecast').appendChild(div);
            
        }
    }



});