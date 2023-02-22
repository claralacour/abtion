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
