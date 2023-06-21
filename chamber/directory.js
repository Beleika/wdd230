const requestURL = `https://beleika.github.io/wdd230/chamber/data.json`;



fetch(requestURL)
  .then(function(response){
    return response.json();
})
.then(function(jsonObject){
  const compagnie = jsonObject['compagnie'];
  
  for( let i =0; i < compagnie.length; i++){

    let image = document.createElement('img');
    let grid = document.createElement('section');
    let Name = document.createElement('h2');
    let Adrress = document.createElement('p');
    let Tel = document.createElement('p');
    let webSite = document.createElement('a');
    
    
  
    var altImg = compagnie[i].Name ;
  
    Name.textContent = compagnie[i].Name;
    Adrress.textContent = 'Adrress: '+ compagnie[i].Adrress;
    Tel.textContent = 'Tel: ' + compagnie[i].Tel;
    image.setAttribute('src', compagnie[i].imageurl);
    webSite.textContent = `${compagnie[i].webSite}`;
    webSite.setAttribute('href', `${compagnie[i].webSite}`);
  
    webSite.href = 'webSite';
   
    
  
    grid.appendChild(Name); 
    grid.appendChild(Adrress);  
    grid.appendChild(Tel);
    grid.appendChild(image, image.alt = altImg);
    grid.appendChild(webSite, webSite.href); 
   
  
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
