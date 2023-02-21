//Preloader script
//Variablerne bliver navngivet
let preload = document.querySelector(".preloader-bg");
let preloadContainer = document.querySelector(".preloader-text-container");
let preloadParagraph = document.querySelectorAll(".preloader-text");

//addEventListener lytter efter DOMContentLoaded, for at sikre sig at funktionen kører når DOM er loadet
window.addEventListener("DOMContentLoaded", () => {
  //setTimeout sætter en timer på en funktion, => er en "arrow function", hvilket er et kompakt alternativ til en normal funktion
  setTimeout(() => {
    //forEach loader her hver paragraph element, og dens index nummer (0, 1 og 2). Her tilføjer p.classList.add "active" classen fra style.cs.
    //(idx + 1) * 140) beskriver at funktionen tager paragraphens index i rækkefølge, og derefter plusser med 1 hvert 140'ende millisekund.
    //Dette gør at hvert paragraph element får "active" classen med 140 millisekunders mellemrum, og giver den ønsket animations-effekt.
    preloadParagraph.forEach((p, idx) => {
      setTimeout(() => {
        p.classList.add("active");
      }, (idx + 1) * 140);
    });

    //Denne forEach funktion fjerne "active" classen fra paragraph elementerne, men tilføjer en ny "fade" class.
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

    //preload.style.top = "100vh" fortæller selve baggrundselementet at kører ned fra skærmen. Hvis man ville have den kørte op i stedet, havde man skrevet "-100vh".
    setTimeout(() => {
      preload.style.top = "100vh";
      //Baggrundsanimationen er sat til at varer 2200 millisekunder (2.2 sekunder).
    }, 2200);
  });
});

//Sticky header til navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});
