const requestURL = 'https://beleika.github.io/wdd230/chamber/data.json';



fetch(requestURL)
  .then(function(response){
    return response.json();
})
.then(function(jsonObject){
  const compagnie = jsonObject['compagnie'];
  
  for( let i =0; i < compagnie.length; i++){

    let name = document.createElement('h2');
    let image = document.createElement('img');
    let grid = document.createElement('section');
    let Adrress = document.createElement('p');
    let Tel = document.createElement('p');
    let webSite = document.createElement('a');
    
    
  
    var altImg = compagnie[i].name + ' ' + compagnie[i].lastname;
  
    h2.textContent = compagnie[i].name + ' ' + compagnie[i].lastname;
    Adrress.textContent = 'Adrress: '+ compagnie[i].Adrress;
    Tel.textContent = 'Tel: ' + compagnie[i].Tel;
    image.setAttribute('src', compagnie[i].imageurl);
    webSite.innerHTML = `${compagnie.webSite}`;
    webSite.setAttribute('href', `${compagnie.url}`);

   

    imageurl.setAttribute('src', compagnie.img);
    imageurl.setAttribute('alt', `${compagnie,name}'s  imageurl ` );
    imageurl.setAttribute('loading', 'lazy');
   
    
  
   
    grid.appendChild(Adrress);  
    grid.appendChild(Tel);
    grid.appendChild(image, image.alt = altImg);
   
  
    document.querySelector('article.grid').appendChild(grid);
  
  }
  
});




const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
