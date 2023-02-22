//Preloader script
//Variablerne bliver navngivet
let preload = document.querySelector(".preloader-bg");
let preloadContainer = document.querySelector(".preloader-text-container");
let preloadParagraph = document.querySelectorAll(".preloader-text");

//addEventListener lytter efter DOMContentLoaded, for at sikre sig at funktionen kører når hele HTML dokumentet er loadet.
window.addEventListener("DOMContentLoaded", () => {
  //setTimeout sætter en timer på en funktion, => er en "arrow function", hvilket er et kompakt alternativ til en normal funktion
  setTimeout(() => {
    //forEach loader her hver paragraph element, og dens index nummer (0, 1 og 2). Her tilføjer p.classList.add "active" classen fra style.css.
    //(idx + 1) * 140) beskriver at funktionen tager paragraphens index i rækkefølge, og derefter plusser med 1 hvert 140'ende millisekund.
    //Dette gør at hvert paragraph element får "active" classen med 140 millisekunders mellemrum, og giver den ønsket animations-effekt.
    preloadParagraph.forEach((p, idx) => {
      setTimeout(() => {
        p.classList.add("active");
      }, (idx + 1) * 140);
    });

    //Denne forEach funktion fjerner "active" classen fra paragraph elementerne, men tilføjer en ny "fade" class.
    //(idx + 1) * 50) beskriver at funktionen tager paragraphens index i rækkefølge, og derefter plusser med 1 hvert 50 millisekunder.
    //Dette gør at hvert paragraph element først mister "active" classen og derefter bliver givet "fade" classen med 50 millisekunders mellemrum
    //Dette får paragraphelementerne til at fade ud igen.
    setTimeout(() => {
      preloadParagraph.forEach((p, idx) => {
        setTimeout(() => {
          p.classList.remove("active");
          p.classList.add("fade");
        }, (idx + 1) * 50);
      });
      //Til sidst er der tilføjet en "total duration" på den øverste setTimeout på 2000 millisekunder (2 sekunder), da animationen på teksten skal køre i 2 sekunder.
    }, 2000);

    //preload.style.top = "100%" fortæller selve baggrundselementet at kører ned fra skærmen. Hvis man ville have den kørte op i stedet, havde man skrevet "-100%".
    setTimeout(() => {
      preload.style.top = "100%";
      //Baggrundsanimationen er sat til at varer 2200 millisekunder (2.2 sekunder).
    }, 2200);
  });
});

//Sticky header til navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

//Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


// Price calculator

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

const radioWebsite = document.getElementById("radio-website");
const radioApp = document.getElementById("radio-app");
const radioSystem = document.getElementById("radio-system");
let form2Array;

let price = 0;
const priceField = document.getElementById("price-field");

form1.addEventListener("change", function(){
  if (radioWebsite.checked){
    form2.innerHTML = "";
    form2Array = ["new-website|Opbygning af ny website|100|option", "webshop|Webshop til eksisterende hjemmeside|200|option", "redesign-website|Redesign af eksisterende website|50|option", "maintain-website|Vedligeholdelse|50|option"];
  } else if (radioApp.checked){
    form2.innerHTML = ""
    form2Array = ["simple-app|Udvikling af simpel app", "advanced-app|Udvikling af app med flere eller avancerede funktioner", "app-update|Opdatering/ forbedring af eksisterende app", "ui|Design af UI/UX"];
  } else if (radioSystem.checked){
    form2.innerHTML = ""
    form2Array = ["system|Udvikling af mindre internt system (Fx til lager og ordrehåndtering)", "advanced-system|Udvikling af komplekse systemer med integrering i nuværende systemer"];
  } 

  for (let i in form2Array){
    let pair = form2Array[i].split("|");
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = pair[0];
    newCheckbox.innerHTML = pair[1];
    newCheckbox.value = pair[2];
    newCheckbox.classList.add(pair[3]);
    let label = document.createElement("label");
    label.htmlFor = pair[0];
    label.innerHTML = pair[1] + "<br>";
    
    let container = document.createElement("div");
    container.appendChild(newCheckbox);
    container.appendChild(label);

    form2.appendChild(container);
  }
});

function calcPrice() {
  let price = 0;
  let option = document.querySelectorAll(".option");

  for (let i in form2Array){
    if (option[i].checked){
      let itemPrice = Number(option[i].value);
      price = Number(price);
      price += itemPrice * 1000;
    }
  }
  price = price.toLocaleString("de-DE");
  priceField.innerHTML = price + " kr.";
}

form2.addEventListener("change", function() {
  calcPrice();
})
