fetch("business.json")
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];

    for (let i = 0; i < jsonObject.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let name = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let link = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = jsonObject[i].name;
        name.textContent = 'Date of Birth: ';
        image.setAttribute('src', jsonObject[i].logo);

        card.appendChild(h2);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(link);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);

    }

    
  });