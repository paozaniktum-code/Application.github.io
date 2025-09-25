// Function for Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

// ========================
// SCROLL TO TOP BUTTON (New Function)
// ========================
const scrollToTop = () => {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollBtn.classList.add('active');
        } else {
            scrollBtn.classList.remove('active');
        }
    });
}

// Run all functions
navSlide();
scrollToTop(); // Run the new function

// Dynamically add keyframes for nav animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes navLinkFade {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0px); }
}
.toggle .line1 { transform: rotate(-45deg) translate(-5px, 6px); }
.toggle .line2 { opacity: 0; }
.toggle .line3 { transform: rotate(45deg) translate(-5px, -6px); }
`;
document.head.appendChild(styleSheet);
