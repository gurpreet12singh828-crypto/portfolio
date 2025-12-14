// 1. Mobile Menu Logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// 2. Typing Text Effect
const textElement = document.querySelector(".typing-text");
const words = ["Data.", "Stocks.", "Trends.", "Algorithms."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0, charIndex);
    
    textElement.textContent = currentChars;
    textElement.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // Typing
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        // Word finished
        isDeleting = !isDeleting;
        textElement.classList.remove("stop-blinking");
        
        if (!isDeleting) {
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        }
        
        setTimeout(typeEffect, 1200);
    }
}

// Start the typing effect
typeEffect();