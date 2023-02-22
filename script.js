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
  '<img src="jsprojekt/digitalinno.svg" alt="digital innovation grafik" class="gallery-img"><h2 class="front-h2">Digital innovation</h2><p>Vi guider dig igennem det ukendte og hjælper dig med at se, hvordan du skal udvikle dig for at forblive relevant i dine kunders øje.</p>',
    '<img src="jsprojekt/uxui.svg" alt="UX/UI grafik" class="gallery-img"><h2 class="front-h2">UX/UI</h2><p>Den der leverer den bedste brugeroplevelse, er den der vinder kunderne og deres loyalitet. Derfor er brugeren centrum for alt hvad vi laver.</p>',
    '<img src="jsprojekt/websites.svg" alt="Laptop grafik" class="gallery-img"><h2 class="front-h2">Websites</h2><p>Vi designer og udvikler websites til alle tænkelige formål. Websites der ikke bare er brugervenlige, men også venlige ved dem der skal arbejde med indholdet i backend. Websites der er billige at vedligeholde og som holder i mange år.</p>',
    '<img src="jsprojekt/mobileapps.svg" alt="Mobil grafik" class="gallery-img"><h2 class="front-h2">UX/UI</h2><p>Vi har udviklet apps lige siden Apples App Store var en lille dreng med græs på knæene, og i al beskedenhed er det noget af det vores multidisciplinære team af programmører, designere og forretningskonsulenter er ret gode til.</p>',
    '<img src="jsprojekt/platforme.svg" alt="Platform grafik" class="gallery-img"><h2 class="front-h2">Platforme og systemer</h2><p>Selvbetjeningsløsninger, tilbudsystemer, administration og logistik. Når du ikke kan finde en hyldevare til dit behov, er det her du skal kigge. Vi er i sær gode til at udvikle løsninger der gør manuelle opgaver lettere, eller får dem til at forsvinde helt.</p>',
    '<img src="jsprojekt/integrationer.svg" alt="Integrationer grafik" class="gallery-img"><h2 class="front-h2">Integrationer</h2><p>Når du har brug for at få forbundet et system med et andet, så dine data kan flyde frit og ubesværet i mellem dem. Slut med copy/paste. Slut med tastefejl. Slut med ventetid. Slut med at data er ude af sync. Alt kan integreres.</p>'
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
      entry.target.classList.add("show2");
    } else {
      entry.target.classList.remove("show2");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer.observe(el));




//------------------------------Newsletter---------------------------------------
//Variabler
const openForm = document.getElementById('open');
const popupContainer = document.querySelector('.popup-container');
const send = document.getElementById('send');
const popUpBox = document.getElementById('popup-box');
const popUpText = document.querySelector('.popup-text');
const popUpInput = document.getElementById("popup-input");
let boxOpen = false;
let emailList = ['example@mail.com','example2@mail.com','example3@mail.com'];


//Åben popup-vindue ved klik på tilmeld-knappen
openForm.addEventListener('click', () => {
 popupContainer.classList.add('show');
 boxOpen = true;
 console.log("hej")
});


//Send den indtastede e-mail ved klik på 'send'
send.addEventListener('click', () => {
 let newEmail = popUpInput.value;
 validation(newEmail);
});


//Luk vindue ved klik udenfor popup-vinduet og fjern indtastede inputs fra før
popupContainer.addEventListener('click', (e) =>{
 if (e.target == popUpBox || e.target == send || e.target == popUpText || e.target == popUpInput){
 } else if (boxOpen == true) {
   popupContainer.classList.remove('show');
   popUpInput.value = "";
   popUpInput.style.backgroundColor = "#ffffff";
 } else {
   return;
 }
});


//Tjek om e-mail er valid og shake-effekt ved ikke-valid e-mail
function validation(email){
 let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 if (email.match(pattern)){
   console.log("Match");
   emailList.push(email);
   console.log(emailList);
   popupContainer.classList.remove('show');
   popUpInput.value = "";
   boxOpen = false;
 }
 else{
   console.log("Fejl");
   popUpBox.classList.add("shake-animation");
 }
}


//Fjern rød border ved klik
popUpInput.addEventListener('click', () => {
 popUpBox.classList.remove('shake-animation');
 popUpInput.style.backgroundColor = "#ffffff";
})