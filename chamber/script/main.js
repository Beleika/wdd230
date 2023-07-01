/* HAMBURGER BUTTON */

function toggleMenu(){ 
    document.getElementById("navigation").classList.toggle("open"); 
	document.getElementById("hamburgerButton").classList.toggle("open"); 
  
} 

const X = document.getElementById("hamburgerButton")
X.onclick = toggleMenu;

/* TODAY'S DATE IN HEADER */
// select the DOM elements to manipulate (we will output to these)

const datefield = document.querySelector("#time");

// for european/family history format with day first.
const datefieldUK = document.querySelector("aside");






/*Today is date in footer*/
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

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// "full" or long, medium, short options ... try them

datefield.textContent = fulldate;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;



/* JOIN US BANNER */
/* Display banner if day is Monday or Wednesday, it's forcing to hide it instead */
const chambermeet = new Date('Wednesday at 7:00 p.m');
const day1 = chambermeet.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
// Expected output: 2

/*Picures respomsive*/
const pic = document.querySelector("picture");
const img = document.querySelector("img");
const dim = document.querySelector("#dim");

window.addEventListener('resize', () => {
	let ratio = img.width / img.height;
  dim.textContent = `Image: ${ratio} (${img.width}px X ${img.height}px)`;
});

/*discover*/
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
}

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} 
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
