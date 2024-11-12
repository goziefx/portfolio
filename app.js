let myBtn = document.getElementById('open-menu');
let navBar = document.getElementById('navigation-menu');
let closeBtn = document.getElementById('close-menu');
let box = document.getElementById('navigation-menu');


myBtn.addEventListener('click', event => {
    navBar.style.display = 'flex';
});

closeBtn.addEventListener('click', event => {
    navBar.style.display = 'none';
});

box.addEventListener('click', event => {
    navBar.style.display = 'none';
});

// AUTO TYPING

let typed = new Typed(".typed", {
    strings: ["Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer", "Frontend Developer", "Graphic Designer"],
    typeSpeed: 150,
    backspeed: 150,
    looped: true,
});