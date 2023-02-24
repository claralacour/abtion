// Price calculator


//Indhenter elementer fra html-filen og definerer en price variabel og en array
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

const radioWebsite = document.getElementById("radio-website");
const radioApp = document.getElementById("radio-app");
const radioSystem = document.getElementById("radio-system");
const radioUi = document.getElementById("radio-ui");
let form2Array;

let price = 0;
const priceField = document.getElementById("price-field");

//Event listener som reagerer på en ændring i første form 
//Afhængig af hvilken radio-button der trykkes på ændres indholdet af den array som har indholdet til form 2
form1.addEventListener("change", function(){
  if (radioWebsite.checked){
    form2.innerHTML = "";
    form2Array = ["new-website|Opbygning af ny website|100|option", "webshop|Webshop til eksisterende hjemmeside|200|option", "redesign-website|Redesign af eksisterende website|50|option", "maintain-website|Vedligeholdelse|50|option"];
  } else if (radioApp.checked){
    form2.innerHTML = ""
    form2Array = ["simple-app|Udvikling af simpel app|200|option", "advanced-app|Udvikling af app med flere eller avancerede funktioner|400|option", "app-update|Opdatering/ forbedring af eksisterende app|80|option"];
  } else if (radioSystem.checked){
    form2.innerHTML = ""
    form2Array = ["system|Udvikling af mindre internt system (Fx til lager og ordrehåndtering)|200|option", "advanced-system|Udvikling af komplekse systemer|450|option", "integration|Integrering med eksisterende systemer|150|option"];
  } else if (radioUi.checked){
    form2.innerHTML = ""
    form2Array = ["brugertest|Design og udførsel af brugertest|80|option", "Wireframes|Wireframes til din brugerflade|50|option", "ui|Fuldt grafisk design af din brugerflade|120|option"];
  } 

  //Et for-loop som kører en gang for hvert punkt i form2array.
  //Loopet splitter hvert punkt i en array der hedder pair, som bruges til at give en ny checkbox et id, et name, en class og noget inner html
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
    
    //Laver en div som indeholder en checkbox og label for hvert punkt(for at flex behaviour fungerer optimalt) 
    let container = document.createElement("div");
    container.appendChild(newCheckbox);
    container.appendChild(label);

    form2.appendChild(container);
  }
});

//En funktion som beregner prisen ved at teste om en checkbox er vinget af, og derefter indhente dens value og lægge den til prisen
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

  //Tilføjer tekst til price samt punktummer for at gøre prisen læselig 
  price = price.toLocaleString("de-DE");
  priceField.innerHTML = "Fra " + price + " kr.";
  if (price == 0){
    priceField.innerHTML = "0 kr.";
  }
}

//Kalder calcPrice funktionen når noget ændres i form1 eller form2 
form2.addEventListener("change", function() {
  calcPrice();
})

form1.addEventListener("change", function() {
  calcPrice();
})

