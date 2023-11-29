// JavaScript Document
console.log("hi");


var menuButton = document.querySelector("button");

var menu = document.querySelector("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick= hamburger; 

// stap 3: voeg in de functie een class toe aan de nav

function hamburger(){
 menu.classList.add("toonMenu"); console.log("hamburgermenuwerkt");
}




/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

var menu = document.querySelector("nav");

// stap 2 - laat die button luisteren naar kliks

sluitButton.onclick= sluitMenu; 


// stap 3 - in de functie verwijder de class van de nav

function sluitMenu(){
 menu.classList.remove("toonMenu"); console.log("hamburgermenuwerkt");
}

