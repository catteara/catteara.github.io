const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];   

        let space = document.createElement('div');
        let h1 = document.createElement('h3');
        let hr = document.createElement('hr');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        h1.textContent = "Upcoming Events";
        p1.textContent = towns[2].events[0];
        p2.textContent = towns[2].events[1];
        p3.textContent = towns[2].events[2];

        space.appendChild(h1);
        space.appendChild(hr);
        space.appendChild(p1);
        space.appendChild(p2);
        space.appendChild(p3);
       
        document.querySelector('div.eventfish').appendChild(space);

  });