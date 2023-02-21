//Sticky header til navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});


//js til burgermenu
const burgermenu = document.querySelector(".burgermenu");
const navList = document.querySelector(".navlist");

burgermenu.addEventListener("click", () =>{
  burgermenu.classList.toggle("active");
  navList.classList.toggle("active");
})

document.querySelectorAll(".navlink").forEach(n => n. addEventListener("click",() => {
  burgermenu.classList.remove("active");
  navList.classList.remove("active");
}))

//bubblegallery - først funktionen der retunere objekt referencen til elementbyid (funktionen hedder _)
function _(x){
  return document.getElementById(x);
}
//bubblegallery - variabler for array, bubble index og setinterval variabler
let ba, bi=0, intrvl;
//bubblegallery - BCA = bubble content array - her findes det andet content
let bca = [
  '<img src="jsprojekt/digitalinno.svg" alt="digital innovation grafik"><h2>Digital innovation</h2><p>Vi guider dig igennem det ukendte og hjælper dig med at se, hvordan du skal udvikle dig for at forblive relevant i dine kunders øje.</p>',
    '<img src="jsprojekt/uxui.svg" alt="UX/UI grafik"><h2>UX/UI</h2><p>Den der leverer den bedste brugeroplevelse, er den der vinder kunderne og deres loyalitet. Derfor er brugeren centrum for alt hvad vi laver.</p>',
    '<img src="jsprojekt/websites.svg" alt="Laptop grafik"><h2>Websites</h2><p>Vi designer og udvikler websites til alle tænkelige formål. Websites der ikke bare er brugervenlige, men også venlige ved dem der skal arbejde med indholdet i backend. Websites der er billige at vedligeholde og som holder i mange år.</p>',
    '<img src="jsprojekt/mobileapps.svg" alt="Mobil grafik"><h2>UX/UI</h2><p>Vi har udviklet apps lige siden Apples App Store var en lille dreng med græs på knæene, og i al beskedenhed er det noget af det vores multidisciplinære team af programmører, designere og forretningskonsulenter er ret gode til.</p>',
    '<img src="jsprojekt/platforme.svg" alt="Platform grafik"><h2>Platforme og systemer</h2><p>Selvbetjeningsløsninger, tilbudsystemer, administration og logistik. Når du ikke kan finde en hyldevare til dit behov, er det her du skal kigge. Vi er i sær gode til at udvikle løsninger der gør manuelle opgaver lettere, eller får dem til at forsvinde helt.</p>',
    '<img src="jsprojekt/integrationer.svg" alt="Integrationer grafik"><h2>Integrationer</h2><p>Når du har brug for at få forbundet et system med et andet, så dine data kan flyde frit og ubesværet i mellem dem. Slut med copy/paste. Slut med tastefejl. Slut med ventetid. Slut med at data er ude af sync. Alt kan integreres.</p>'
];
//denne her funktion bliver triggeret af funktionen under 
function bubbles(bi){
  //det her fader vores content mellem siderne
  _("bubblecontent").style.opacity = 0;
  //så laver vi et loop med alle boblerne og ændres deres bg farve imens
  for(let i=0; i < ba.length; i++){
    ba[i].style.background = "rgba(0,0,0,.1)";
  }
  //her sørger vi for at den valgte bobbles farve er blå
  ba[bi].style.background ="#2EEF92";
  //sætter en delay på 300ms
  setTimeout(function(){
    _("bubblecontent").innerHTML = bca[bi];
    _("bubblecontent").style.opacity = 1; 
  }, 300);
}
//sætter en timer på, så den skifter hvert 5. sekund(hvis bi er samme værdi som ba så skal den reset og den stiger med én hver gang)
function bubbleSlide(){
  bi++;
  if(bi == ba.length){
    bi = 0; //så her resetter den altså, så bubble index er 0 og loopet starter igen
  }
  bubbles(bi);
}
window.addEventListener("load", function(){
  ba = _("bubbles").children;
  intrvl = setInterval(bubbleSlide, 5000);
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
