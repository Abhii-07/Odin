import mainContainer from "./index.js";

export default function menuPage() {
  let menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");

  menuContainer.dataset.tabContent = "";

  mainContainer.appendChild(menuContainer);
  menuHeader();
  menuTiles();
}

function menuHeader() {
  let menuTitle = document.createElement("h1");
  menuTitle.setAttribute("id", "menu-title");
  menuTitle.textContent = "Make your choice!";

  document.getElementById("menu-container").appendChild(menuTitle);
}

function menuTiles() {
  let tileContainer = document.createElement("div");
  tileContainer.setAttribute("id", "tile-container");

  document.getElementById("menu-container").appendChild(tileContainer);
  tileFactory(6);
  tileImage();
  tileText();
}

function tileFactory(tileAmount) {
  for (let i = 0; i < tileAmount; i++) {
    let tile = document.createElement("div");
    tile.classList.add("menu-tiles");
    tile.setAttribute("id", `tile${i + 1}`);
    document.getElementById("tile-container").appendChild(tile);

    let tileDiv = document.createElement("div");
    tileDiv.classList.add("tile-div");
    tileDiv.setAttribute("id", `div${i + 1}`);
    document.getElementById(`tile${i + 1}`).appendChild(tileDiv);

    let tileText = document.createElement("p");
    tileText.classList.add("tile-text");
    tileText.textContent =
      "Lorem ipsum dolor sit amet consectetur adipiscing elit curae.";
    document.getElementById(`tile${i + 1}`).appendChild(tileText);
  }
}

function tileImage() {
  const divOne = document.getElementById("div1");
  const divTwo = document.getElementById("div2");
  const divThree = document.getElementById("div3");
  const divFour = document.getElementById("div4");
  const divFive = document.getElementById("div5");
  const divSix = document.getElementById("div6");

  let tileOneImage = document.createElement("img");
  tileOneImage.src = "images/pepperoni.jpg";
  tileOneImage.classList.add("menu-images");

  let tileTwoImage = document.createElement("img");
  tileTwoImage.src = "images/cheese-onion.jpg";
  tileTwoImage.classList.add("menu-images");

  let tileThreeImage = document.createElement("img");
  tileThreeImage.src = "images/onions.jpg";
  tileThreeImage.classList.add("menu-images");

  let tileFourImage = document.createElement("img");
  tileFourImage.src = "images/chicken.jpg";
  tileFourImage.classList.add("menu-images");

  let tileFiveImage = document.createElement("img");
  tileFiveImage.src = "images/mushroom.jpg";
  tileFiveImage.classList.add("menu-images");

  let tileSixImage = document.createElement("img");
  tileSixImage.src = "images/Sausage.jpg";
  tileSixImage.classList.add("menu-images");

  document.getElementById("tile1").insertBefore(tileOneImage, divOne);
  document.getElementById("tile2").insertBefore(tileTwoImage, divTwo);
  document.getElementById("tile3").insertBefore(tileThreeImage, divThree);
  document.getElementById("tile4").insertBefore(tileFourImage, divFour);
  document.getElementById("tile5").insertBefore(tileFiveImage, divFive);
  document.getElementById("tile6").insertBefore(tileSixImage, divSix);
}

function tileText() {
  let tileOneTitle = document.createElement("h2");
  let tileTwoTitle = document.createElement("h2");
  let tileThreeTitle = document.createElement("h2");
  let tileFourTitle = document.createElement("h2");
  let tileFiveTitle = document.createElement("h2");
  let tileSixTitle = document.createElement("h2");

  tileOneTitle.classList.add("tile-title");
  tileTwoTitle.classList.add("tile-title");
  tileThreeTitle.classList.add("tile-title");
  tileFourTitle.classList.add("tile-title");
  tileFiveTitle.classList.add("tile-title");
  tileSixTitle.classList.add("tile-title");

  tileOneTitle.textContent = "Pepperoni Pizza";
  tileTwoTitle.textContent = "Cheese Onion";
  tileThreeTitle.textContent = "Onions Pizza";
  tileFourTitle.textContent = "Chicken Pizza";
  tileFiveTitle.textContent = "Mushroom Pizza";
  tileSixTitle.textContent = "Sausage Pizza";

  document.getElementById("div1").appendChild(tileOneTitle);
  document.getElementById("div2").appendChild(tileTwoTitle);
  document.getElementById("div3").appendChild(tileThreeTitle);
  document.getElementById("div4").appendChild(tileFourTitle);
  document.getElementById("div5").appendChild(tileFiveTitle);
  document.getElementById("div6").appendChild(tileSixTitle);
}
