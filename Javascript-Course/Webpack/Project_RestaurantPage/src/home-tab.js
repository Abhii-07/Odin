import mainContainer from "./index.js";

export default function homePage() {
  let homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", "home-container");

  homeContainer.dataset.tabContent = "";
  homeContainer.classList.add("active");

  mainContainer.appendChild(homeContainer);

  homeWallpaper();
  homeAbout();
}

function homeWallpaper() {
  let homeImageCont = document.createElement("div");
  homeImageCont.setAttribute("id", "home-img-container");

  let homeTitle = document.createElement("h1");
  homeTitle.textContent = "We make THE Pizza";
  homeTitle.setAttribute("id", "home-title");

  let homeSubtitle = document.createElement("h4");
  homeSubtitle.textContent = "Don't believe us? take a slice.";
  homeSubtitle.setAttribute("id", "home-subtitle");

  document.getElementById("home-container").appendChild(homeImageCont);
  document.getElementById("home-img-container").appendChild(homeTitle);
  document.getElementById("home-img-container").appendChild(homeSubtitle);
}

function homeAbout() {
  let aboutTitle = document.createElement("h1");
  aboutTitle.setAttribute("id", "about-title");
  aboutTitle.textContent = "ABOUT";

  let aboutText = document.createElement("p");
  aboutText.setAttribute("id", "about-text");
  aboutText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit curae, convallis blandit etiam vestibulum tortor odio commodo, posuere eleifend penatibus suspendisse maecenas pharetra ante. Lacinia mi ad sociis elementum dictum vehicula gravida ligula molestie, ullamcorper ultricies leo urna libero cursus hendrerit dictumst, at in aliquam et potenti accumsan tempus sociosqu.";

  document.getElementById("home-container").appendChild(aboutTitle);
  document.getElementById("home-container").appendChild(aboutText);
}
