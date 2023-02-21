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
