import contactPage from "./contact-page.js";
import homePage from "./home-tab.js";
import menuPage from "./menu-tab";

const mainContainer = document.querySelector("#content");
export default mainContainer;

function topBarAppend() {
  let topBar = document.createElement("nav");
  topBar.setAttribute("id", "top-bar");

  mainContainer.appendChild(topBar);
  navLogoAppend();
  listAppend();
}

function navLogoAppend() {
  const topBar = document.querySelector("#top-bar");

  let logoCont = document.createElement("div");
  logoCont.setAttribute("id", "logo-container");
  topBar.appendChild(logoCont);

  let logo = document.createElement("img");
  logo.src = "images/pizza-slice-solid.svg";
  logo.setAttribute("id", "logo");

  let logoText = document.createElement("h2");
  logoText.textContent = "pizzamanía";
  logoText.setAttribute("id", "logo-text");

  document.getElementById("logo-container").appendChild(logo);
  document.getElementById("logo-container").appendChild(logoText);
}

function listAppend() {
  let list = document.createElement("ul");
  list.setAttribute("id", "top-bar-ul");

  document.getElementById("top-bar").appendChild(list);

  let listOne = document.createElement("li");
  let listTwo = document.createElement("li");
  let listThree = document.createElement("li");

  listOne.setAttribute("id", "lOne");
  listTwo.setAttribute("id", "lTwo");
  listThree.setAttribute("id", "lThree");

  document.getElementById("top-bar-ul").appendChild(listOne);
  document.getElementById("top-bar-ul").appendChild(listTwo);
  document.getElementById("top-bar-ul").appendChild(listThree);

  let homeLink = document.createElement("a");
  let menuLink = document.createElement("a");
  let contactLink = document.createElement("a");

  homeLink.textContent = "Home";
  menuLink.textContent = "Menu";
  contactLink.textContent = "Contact";

  homeLink.classList.add("active-tab");
  menuLink.classList.add("tab");
  contactLink.classList.add("tab");

  homeLink.dataset.tabTarget = "#home-container";
  menuLink.dataset.tabTarget = "#menu-container";
  contactLink.dataset.tabTarget = "#contact-container";

  document.getElementById("lOne").appendChild(homeLink);
  document.getElementById("lTwo").appendChild(menuLink);
  document.getElementById("lThree").appendChild(contactLink);
}

function tabSwitch() {
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
      });
      tab.classList.add("active-tab");
      target.classList.add("active");
    });
  });
}

topBarAppend();
homePage();
menuPage();
contactPage();
tabSwitch();

export { mainContainer };
