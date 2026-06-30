/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (menuBtn.classList.contains("fa-bars")) {
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-xmark");
    } else {
        menuBtn.classList.remove("fa-xmark");
        menuBtn.classList.add("fa-bars");
    }
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.classList.remove("fa-xmark");
        menuBtn.classList.add("fa-bars");
    });
});


/*=========================================
        DARK MODE
=========================================*/

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeToggle.classList.remove("fa-moon");
        themeToggle.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        themeToggle.classList.remove("fa-sun");
        themeToggle.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});

// Load saved theme
window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeToggle.classList.remove("fa-moon");
        themeToggle.classList.add("fa-sun");

    }

});


/*=========================================
        TYPING EFFECT
=========================================*/

const typing = document.getElementById("typing");

const words = [

    "Software Test Engineer",
    "QA Engineer",
    "Manual Tester",
    "API Tester",
    "Automation Tester",
    "Selenium Developer",
    "Postman Expert"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
        ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        SCROLL REVEAL
=========================================*/

const cards = document.querySelectorAll(

    ".about-card, .timeline-card, .project-card, .skill-card, .cert-card, .contact-card"

);

function revealCards() {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "all .8s ease";

        }

    });

}

window.addEventListener("scroll", revealCards);

window.addEventListener("load", revealCards);


/*=========================================
        STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.padding = "15px 8%";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.padding = "20px 8%";
        header.style.boxShadow = "none";

    }

});


/*=========================================
        CURRENT YEAR IN FOOTER
=========================================*/

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Rama Kant | Software Test Engineer | All Rights Reserved`;

}

console.log("✅ QA Portfolio Loaded Successfully");