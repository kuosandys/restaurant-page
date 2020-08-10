import {pageLoad, mainLoad} from "./page_load.js"
import {menuLoad} from "./menu.js"
import {contactLoad} from "./contact.js"


import './style.scss';

pageLoad();

// Select DOM elements
const contentDiv = document.getElementById("content");
const mainDiv = document.getElementById("main-div");
const title = document.getElementById("title");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");


// Event listeners for buttons
menuButton.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(menuLoad());
})

title.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(mainLoad());
})

contactButton.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(contactLoad());
})