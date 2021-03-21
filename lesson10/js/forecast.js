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