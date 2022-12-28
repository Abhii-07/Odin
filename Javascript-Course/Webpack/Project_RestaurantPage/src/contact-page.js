import mainContainer from "./index.js";

export default function contactPage() {
  let contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contact-container");

  contactContainer.dataset.tabContent = "";

  let pageTitle = document.createElement("h1");
  pageTitle.textContent = "Contact us";

  mainContainer.appendChild(contactContainer);
  document.getElementById("contact-container").appendChild(pageTitle);

  dataContainer();
  adress();
  eMail();
  phoneNumber();
}

function dataContainer() {
  let divContainer = document.createElement("div");
  divContainer.setAttribute("id", "data-container");
  document.getElementById("contact-container").appendChild(divContainer);
}

function adress() {
  let adressContainer = document.createElement("div");
  adressContainer.classList.add("single-data-container");
  adressContainer.setAttribute("id", "container-one");
  document.getElementById("data-container").appendChild(adressContainer);

  let adressIcon = document.createElement("img");
  adressIcon.classList.add("contact-icons");
  adressIcon.src = "images/adress-card-solid.svg";
  document.getElementById("container-one").appendChild(adressIcon);

  let adressText = document.createElement("h4");
  adressText.classList.add("contact-text");
  adressText.textContent = "Lorem street 5555";
  document.getElementById("container-one").appendChild(adressText);
}

function eMail() {
  let eMailContainer = document.createElement("div");
  eMailContainer.classList.add("single-data-container");
  eMailContainer.setAttribute("id", "container-two");
  document.getElementById("data-container").appendChild(eMailContainer);

  let emailIcon = document.createElement("img");
  emailIcon.classList.add("contact-icons");
  emailIcon.src = "images/at-solid.svg";
  document.getElementById("container-two").appendChild(emailIcon);

  let adressText = document.createElement("h4");
  adressText.classList.add("contact-text");
  adressText.textContent = "loremipsum@dolorSit.amet";
  document.getElementById("container-two").appendChild(adressText);
}

function phoneNumber() {
  let phoneContainer = document.createElement("div");
  phoneContainer.classList.add("single-data-container");
  phoneContainer.setAttribute("id", "container-three");
  document.getElementById("data-container").appendChild(phoneContainer);

  let phoneIcon = document.createElement("img");
  phoneIcon.classList.add("contact-icons");
  phoneIcon.src = "images/phone-solid.svg";
  document.getElementById("container-three").appendChild(phoneIcon);

  let adressText = document.createElement("h4");
  adressText.classList.add("contact-text");
  adressText.textContent = "0111-555-888";
  document.getElementById("container-three").appendChild(adressText);
}

//function adress() {
//    let adressContainer = document.createElement('div');
//    adressContainer.classList.add('single-data-container')
//    adressContainer.setAttribute('id', 'containerOne');
//    document.getElementById('data-container').appendChild(adressContainer);
//
//    let adressText = document.createElement('h4');
//    adressText.classList.add('contact-text');
//    adressText.textContent = 'asdf';
//    document.getElementById('containerOne').appendChild(adressText);
//}
