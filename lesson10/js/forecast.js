
const URL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9f6e867aadd6669d3ad428534541ab88'
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {

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

        /* 
        var now = new Date(list[0].dt_txt);
        var today = now.getDate(); 
        var dayOfMonth = new Date().getDate();
        var dayOfWeek = now.getDay(); 
        var d = dayOfMonth - today;
        var x = dayOfWeek + d;

        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        weekday[7] = "Sunday";
        weekday[8] = "Monday";
        weekday[9] = "Tuesday";
        weekday[10] = "Wednesday";
        weekday[11] = "Thursday";
        weekday[12] = "Friday";
        weekday[13] = "Saturday";   

        document.getElementById('day1').textContent = weekday[x+1];
        document.getElementById('day2').textContent = weekday[x+2];
        document.getElementById('day3').textContent = weekday[x+3];
        document.getElementById('day4').textContent = weekday[x+4];
        document.getElementById('day5').textContent = weekday[x+5];

    //Icons
        let image = document.createElement('img');

        let icon1 = image.setAttribute('src',"https://openweathermap.org/img/w/" + list[0].weather[0].icon + '.png');
            document.getElementById('weatherIcon1').textContent = icon1;
        let icon2 = image.setAttribute('src',"https://openweathermap.org/img/w/" + list[1].weather[0].icon + '.png');
            document.getElementById('weatherIcon2').textContent = icon2;
        let icon3 = image.setAttribute('src',"https://openweathermap.org/img/w/" + list[2].weather[0].icon + '.png');
            document.getElementById('weatherIcon3').textContent = icon3;
        let icon4 = image.setAttribute('src',"https://openweathermap.org/img/w/" + list[3].weather[0].icon + '.png');
            document.getElementById('weatherIcon3').textContent = icon4;
        let icon5 = image.setAttribute('src',"https://openweathermap.org/img/w/" + list[4].weather[0].icon + '.png');
            document.getElementById('weatherIcon3').textContent = icon5;

    //Descriptions
        document.getElementById('desc1').textContent = list[0].weather[0].description;
        document.getElementById('desc2').textContent = list[1].weather[0].description;
        document.getElementById('desc3').textContent = list[2].weather[0].description;
        document.getElementById('desc4').textContent = list[3].weather[0].description;
        document.getElementById('desc5').textContent = list[4].weather[0].description;

    //Highs
        document.getElementById('high1').textContent = list[0].main.temp_max + '\xB0';
        document.getElementById('high2').textContent = list[1].main.temp_max + '\xB0';
        document.getElementById('high3').textContent = list[2].main.temp_max + '\xB0';
        document.getElementById('high4').textContent = list[3].main.temp_max + '\xB0';
        document.getElementById('high5').textContent = list[4].main.temp_max + '\xB0';

    //Lows
        document.getElementById('low1').textContent = list[0].main.temp_min + '\xB0';
        document.getElementById('low2').textContent = list[1].main.temp_min + '\xB0';
        document.getElementById('low3').textContent = list[2].main.temp_min + '\xB0';
        document.getElementById('low4').textContent = list[3].main.temp_min + '\xB0';
        document.getElementById('low5').textContent = list[4].main.temp_min + '\xB0';
  });
 
  */