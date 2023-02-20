//Sticky header til navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});


//Newsletter
const openForm = document.getElementById('open');
const popupContainer = document.querySelector('.popup-container');
const send = document.getElementById('send');
const popUpBox = document.getElementById('popup-box');
const popUpText = document.querySelector('.popup-text');
const popUpInput = document.getElementById("popup-input");
let boxOpen = false;

openForm.addEventListener('click', () => {
  popupContainer.classList.add('show');
  boxOpen = true;
});

send.addEventListener('click', () => {
  popupContainer.classList.remove('show');
  boxOpen = false;
});

popupContainer.addEventListener('click', (e) =>{
  if (e.target == popUpBox || e.target == send || e.target == popUpText || e.target == popUpInput){
    console.log("Inside");
  } else if (boxOpen == true) {
    console.log("outside");
    popupContainer.classList.remove('show');
  } else {
    return;
  }
});