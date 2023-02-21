//Sticky header til navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});


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

//Åben popup-vindue ved klik
openForm.addEventListener('click', () => {
  popupContainer.classList.add('show');
  boxOpen = true;
});

//Send e-mail ved klik på 'send'
send.addEventListener('click', () => {
  let newEmail = popUpInput.value;
  validation(newEmail);
});

//Luk vindue ved klik udenfor popup-vinduet
popupContainer.addEventListener('click', (e) =>{
  if (e.target == popUpBox || e.target == send || e.target == popUpText || e.target == popUpInput){
  } else if (boxOpen == true) {
    popupContainer.classList.remove('show');
    popUpInput.value = "";
    popUpInput.style.borderColor = "black";
    popUpInput.style.backgroundColor = "#ffffff";
  } else {
    return;
  }
});

//Tjek om e-mail er valid og tilføj rød farve og shake-effekt ved ikke-valid e-mail
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
    popUpInput.style.borderColor = "#f16464";
  }
}

//Fjern rød markering ved klik
popUpInput.addEventListener('click', () => {
  popUpBox.classList.remove('shake-animation');
  popUpInput.style.backgroundColor = "#ffffff";
})