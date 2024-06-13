
// Selectors for sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function activemenu() {
    let currentSectionIndex = sections.length;
    while (--currentSectionIndex && window.scrollY + 97 < sections[currentSectionIndex].offsetTop) { }
    navLinks.forEach(link => link.classList.remove("active"));
    if (navLinks[currentSectionIndex]) {
        navLinks[currentSectionIndex].classList.add("active");
    }
}
activemenu();
window.addEventListener("scroll", activemenu);

// links active on click
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            document.querySelector('.nav-link.active').classList.remove('active');
            this.classList.add('active');
        });
    });
});