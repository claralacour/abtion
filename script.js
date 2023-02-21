//Sticky header til navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});


//Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// Price calculator

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

const radioWebsite = document.getElementById("radio-website");
const radioApp = document.getElementById("radio-app");
const radioSystem = document.getElementById("radio-system");

form1.addEventListener("change", function(){
  if (radioWebsite.checked){
    form2.innerHTML = "";
    var form2Array = ["new-website|Opbygning af ny website", "webshop|Webshop til eksisterende hjemmeside", "redesign-website|Redesign af eksisterende website", "maintain-website|Vedligeholdelse"];
  } else if (radioApp.checked){
    form2.innerHTML = "app"
  } else if (radioSystem.checked){
    form2.innerHTML = "system"
  } 

  for (let i in form2Array){
    let pair = form2Array[i].split("|");
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = pair[0];
    newCheckbox.innerHTML = pair[1];
    let label = document.createElement("label");
    label.htmlFor = pair[0];
    label.innerHTML = pair[1] + "<br>";
    form2.appendChild(newCheckbox);
    form2.appendChild(label);
  }
});

