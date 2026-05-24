// MOBILE MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// TYPING EFFECT

const textElement = document.querySelector(".typing-text");

const words = [

    "AI Models.",
    "Data Insights.",
    "Machine Learning.",
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
