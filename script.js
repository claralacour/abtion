//Preloader script
//preloadingFade fader baggrunden og teksten ud
function preloadingFade() {
  const preloadingBg = document.querySelector(".preloader-bg");
  const preloadingParagraph = document.querySelector(".preloader-text");
  preloadingBg.style.opacity = "0";
  preloadingParagraph.style.opacity = "0";
}

//preloadingRemove fjerner det udsynlige div element, hvilket gør at man kan klikke på links på siden når loadingRemove bliver kaldt.
function preloadingRemove() {
  const preloading = document.querySelector(".preloader");
  preloading.style.display = "none";
}

function preloader() {
  window.setInterval(preloadingFade, 1000);
  window.setInterval(preloadingRemove, 1500);
}

window.onload = preloader;

//Sticky header til navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});
