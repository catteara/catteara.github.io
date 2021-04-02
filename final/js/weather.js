const apiURL ="https://api.openweathermap.org/data/2.5/onecall?lat=33.448376&lon=-112.074036&exclude=hourly,minutely&appid=9f6e867aadd6669d3ad428534541ab88&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("temp").textContent = Math.round(jsObject.current.temp); //Current Temperature

    const desc = jsObject.current.weather[0].description;
    document.getElementById("current").textContent = desc; //Current Weather Description

    document.getElementById("humidity").textContent = jsObject.current.humidity; //Humidity

    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

  for (i=1; i < 4; i++) {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let image = document.createElement("img");
        let dayName = new Date(jsObject.daily[i].dt * 1000).toLocaleString("en-us", {weekday: "long"});

        p1.textContent = dayName;
        image.setAttribute("src","https://openweathermap.org/img/w/" +jsObject.daily[i].weather[0].icon + ".png");

        image.setAttribute("alt", "weather icon");
        p2.textContent = jsObject.daily[i].temp.max.toFixed(0) + "\xB0" + " F";

        div.appendChild(p1);
        div.appendChild(image);
        div.appendChild(p2);

        document.querySelector("div.forecast").appendChild(div);
    }
    
});
