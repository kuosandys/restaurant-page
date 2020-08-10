// Function that creates and loads elements of the page
export function pageLoad() {

    // Get content div
    const contentDiv = document.getElementById("content");

    // Header element
    let header = document.createElement("header");

    // Title
    let title = document.createElement("h1");
    title.textContent = "Baymax & Co.";
    title.id = "title"
    header.appendChild(title);

    // Tab buttons
    let tabDiv = document.createElement("div");
    tabDiv.id = "tab-div";

    let menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.id = "menu-button";
    menuButton.setAttribute("class", "tab-button");
    tabDiv.appendChild(menuButton);

    let contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.id = "contact-button";
    contactButton.setAttribute("class", "tab-button");
    tabDiv.appendChild(contactButton);

    header.appendChild(tabDiv);

    contentDiv.appendChild(header);

    // Main div
    let mainDiv = document.createElement("div");
    mainDiv.id = "main-div";

    // Load main contents
    mainDiv.appendChild(mainLoad());

    contentDiv.appendChild(mainDiv);

}

export function mainLoad() {
    // Home div
    let homeDiv = document.createElement("div");
    homeDiv.id = "home-div";

    // Home image
    let homeImage = document.createElement("img");
    homeImage.src = "images/breakfast.jpg";
    homeDiv.appendChild(homeImage);

    // Text about the restaurant
    let text = document.createElement("p");
    text.textContent = "Serving the best brunch in San Fransokyo since the invention of brunch.";
    text.id = "tagline";
    homeDiv.appendChild(text);

    return homeDiv;
}