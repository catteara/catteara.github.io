const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    
    for (let i = 0; i < towns.length; i = i+2 ) {

        let summary = document.createElement('section');
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        h3.textContent = towns[i].name;
        h5.textContent = towns[i].motto;
        p1.textContent = "Year Founded: " + towns[i].yearFounded;
        p2.textContent = "Population: " + towns[i].currentPopulation;
        p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        image.setAttribute('src',"./images/" + towns[i].photo);

        summary.appendChild(h3);
        summary.appendChild(h5);
        summary.appendChild(p1);
        summary.appendChild(p2);
        summary.appendChild(p3);
        summary.appendChild(image);
        
        document.querySelector('div.summaries').appendChild(summary);

      if(i === 2) {
        break;
      }

    }   

        let summary = document.createElement('section');
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        h3.textContent = towns[6].name;
        h5.textContent = towns[6].motto;
        p1.textContent = "Year Founded: " + towns[6].yearFounded;
        p2.textContent = "Population: " + towns[6].currentPopulation;
        p3.textContent = "Annual Rain Fall: " + towns[6].averageRainfall;
        image.setAttribute('src',"./images/" + towns[6].photo);
        image.setAttribute('alt', "Town Photo");

        summary.appendChild(h3);
        summary.appendChild(h5);
        summary.appendChild(p1);
        summary.appendChild(p2);
        summary.appendChild(p3);
        summary.appendChild(image);
        
        document.querySelector('div.summaries').appendChild(summary);

    
  });

