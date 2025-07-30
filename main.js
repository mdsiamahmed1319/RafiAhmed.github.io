// navigator

const navIcon = document.getElementById('nav-icon');
const navMenu = document.querySelector('.nav');

navIcon.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navIcon.classList.toggle('open');
});



// Typed.js
const typed = new Typed(".text", {
   strings: ["Student", "Web Developer", "Gamer"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true,
});

// Skill Circles
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const dots = circle.getAttribute('data-dots');
  const marked = circle.getAttribute('data-percent');
  const percent = Math.floor((dots * marked) / 100);
  const rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    const point = document.createElement('div');
    point.className = 'points';
    point.style.setProperty('--i', i);
    point.style.setProperty('--rot', rotate + 'deg');

    if (i < percent) {
      point.classList.add('marked');
    }

    circle.appendChild(point);
  }
});


// MixItUp
const mixer = mixitup(".portfolio-gallery");

// Menu Scroll Active
const menu = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activeMenu() {
    const len = section.length;
    let i = len;
    while (--i && window.scrollY + 97 < section[i].offsetTop) {}
    menu.forEach(sec => sec.classList.remove("active"));
    menu[i].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky Header
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
});