const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

fetch(requestURL)
  .then(function(response){
    return response.json();
})
.then(function(jsonObject){
  const compagnie = jsonObject['compagnie'];
  
  for( let i =0; i < compagnie.length; i++){
  
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let Adrress = document.createElement('p');
    let Tel = document.createElement('p');
    let image = document.createElement('img');
  
    var altImg = compagnie[i].name + ' ' + compagnie[i].lastname;
  
    h2.textContent = compagnie[i].address + ' ' + compagnie[i].address;
    Adrress.textContent = 'Date of Birth: '+ compagnie[i].Adress;
    Tel.textContent = 'Tel: ' + compagnie[i].Tel;
    image.setAttribute('src', compagnie[i].imageurl);
  
    card.appendChild(h2);
    card.appendChild(Adrress);
    card.appendChild(Tel);
    card.appendChild(image, image.alt = altImg);
  
    document.querySelector('div.cards').appendChild(card);
  
  }
  
});




const gridbutton = document.querySelector("#gridDirectory");
const listbutton = document.querySelector("#listDirectory");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("gridDirectory");
	display.classList.remove("listDirectory");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("listDirectory");
	display.classList.remove("gridDirectory");
}
