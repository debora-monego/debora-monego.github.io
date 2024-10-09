console.log('Script is running');

// Function to toggle the mobile menu
function toggleMenu() {
    console.log('toggleMenu called');
    const navLinks = document.querySelector('.nav-links');
    console.log('navLinks before:', navLinks.classList);
    navLinks.classList.toggle('mobile');
    navLinks.classList.toggle('active');
    console.log('navLinks after:', navLinks.classList);
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    console.log('Hamburger element:', hamburger);
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            console.log('Hamburger clicked');
            toggleMenu();
        });
    } else {
        console.log('Hamburger element not found');
    }
});

// Close the menu when clicking outside
document.addEventListener('click', function (event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)) {
        toggleMenu();
    }
});