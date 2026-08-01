const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Mobile Menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Typing Animation
const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Learner",
    "PHP Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const typing = document.querySelector(".typing");

function type() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(type, deleting ? 60 : 120);
}

type();

// Scroll Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    topBtn.style.display = window.scrollY > 300 ? "block" : "none";

});

topBtn.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};