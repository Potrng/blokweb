// JavaScript Document
console.log("hi");


var menuButton = document.querySelector("button");

var menu = document.querySelector("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick = hamburger;

// stap 3: voeg in de functie een class toe aan de nav

function hamburger() {
    menu.classList.add("toonMenu"); console.log("hamburgermenuwerkt");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

var sluitButton = document.querySelector("nav button");

var menu = document.querySelector("nav");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
    menu.classList.remove("toonMenu"); console.log("hamburgermenuwerkt");
}

