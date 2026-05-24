// =========================
// UPDATED script.js
// =========================

// MOBILE MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// CLOSE MENU

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// TYPING EFFECT

const textElement = document.querySelector(".typing-text");

const words = [

    "AI Models.",
    "Data Insights.",
    "Machine Learning.",
    "Modern Analytics.",
    "Future Technology."

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    const currentText =
    currentWord.substring(0,charIndex);

    textElement.textContent = currentText;

    if(!isDeleting && charIndex < currentWord.length){

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else if(isDeleting && charIndex > 0){

        charIndex--;

        setTimeout(typeEffect,50);

    }

    else{

        isDeleting = !isDeleting;

        if(!isDeleting){

            wordIndex =
            (wordIndex + 1) % words.length;

        }

        setTimeout(typeEffect,1200);

    }

}

typeEffect();

// SCROLL ANIMATION

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".skill-card,.project-card,.about-box")
.forEach((el)=>observer.observe(el));
