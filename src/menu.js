let menuItems = [
    {name: "Eggs Benedict", image: "eggs-benedict.jpg"},
    {name: "Avocado Toast", image: "avocado-toast.jpg"},
    {name: "Breakfast Bagel", image: "breakfast-bagel.jpg"},
    {name: "Chocolate Waffles", image: "chocolate-waffles.jpg"},
    {name: "Full English Breakfast", image: "full-english.jpg"},
    {name: "Berry Oatmeal", image: "oatmeal.jpg"},
    {name: "All-Dressed Omelette", image: "omelette.jpg"},
    {name: "Berry Pancakes", image: "pancakes.jpg"},
    {name: "Shakshuka", image: "shakshuka.jpg"}
];

// Create menu page

function menuLoad() {
    // Create menu div
    let menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";

    menuItems.forEach((item) => {
        menuDiv.appendChild(createElement(item));
    })

    return menuDiv;

}

function createElement(menuItem) {
    let item = document.createElement("div");
    item.setAttribute("class", "menu-item");

    let image = document.createElement("img");
    image.src = `./images/menu/${menuItem.image}`;
    image.class = "menu-image";
    item.appendChild(image);

    let text = document.createElement("p");
    text.textContent = menuItem.name;
    text.class = "menu-text";
    item.appendChild(text);

    return item;
}

export {menuLoad};