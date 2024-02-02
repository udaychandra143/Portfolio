// JavaScript functionality to animate the skills level on load

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// JavaScript functionality to animate the skills level on load
document.addEventListener("DOMContentLoaded", function () {
    const skillLevels = document.querySelectorAll(".skill-level");
    skillLevels.forEach((level) => {
        const width = level.style.width;
        level.style.width = "0";
        setTimeout(() => {
            level.style.width = width;
        }, 200); // Delay to initiate the animation
    });
});
// JavaScript functionality to add animation
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    contactForm.classList.add("show");
});
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) { 
            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};    

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top' });
ScrollReveal().reveal('.background1-img, .skills-container, .work-box, .contact form',{origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .skill-name',{origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right' });

const typed = new Typed('.multiple-text',{
    strings:  ['Civil Engineer','Designer','Programmer','Artist','Photographer','Free Lancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});