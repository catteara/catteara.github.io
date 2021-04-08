fetch("business.json")
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];

    for (let i = 0; i < businesses.length; i++ ) {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let link = document.createElement('a');
        let image = document.createElement('img');

        card.classList.add("column")
        h3.textContent = businesses[i].name;
        phone.textContent = businesses[i].phone;
        image.setAttribute('src', businesses[i].logo);
        email.textContent = businesses[i].email;
        link.textContent = businesses[i].link;

        card.appendChild(h3);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(link);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);

    }

        document.getElementById("list").addEventListener("click", function(){
          document.querySelector(".cards").classList.remove("grid");
        });

        document.getElementById("grid").addEventListener("click", function(){
          document.querySelector(".cards").classList.add("grid");
        });

});