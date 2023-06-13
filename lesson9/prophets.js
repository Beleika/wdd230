const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

fetch(requestURL)
  .then(function(response){
    return response.json();
})
.then(function(jsonObject){
  const prophets = jsonObject['prophets'];
  
  for( let i =0; i < prophets.length; i++){
  
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let image = document.createElement('img');
  
    var altImg = prophets[i].name + ' ' + prophets[i].lastname;
  
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    birthDate.textContent = 'Date of Birth: '+ prophets[i].birthdate;
    birthPlace.textContent = 'Place of birth: ' + prophets[i].birthplace;
    image.setAttribute('src', prophets[i].imageurl);
  
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(image, image.alt = altImg);
  
    document.querySelector('div.cards').appendChild(card);
  
  }
  
});

// Select the HTML element to manipulate
const date = document.querySelector("#date");
const message = document.querySelector("#emessage");

// Try to complete the method with options
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date.innerHTML = ` <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>!`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

// Long hand method ... building day and month names from built-in date methods.
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
