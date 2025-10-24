// Typewriter
const typewriterText = "Prateek Kumar Singh";
let i = 0;
const typewriterEl = document.getElementById('typewriter');
function type() {
    if (i < typewriterText.length) {
        typewriterEl.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Progress Bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.fill');
            fills.forEach(fill => {
                const width = fill.style.width;
                fill.style.width = '0%';
                setTimeout(() => fill.style.width = width, 100);
            });
        }
    });
}, { threshold: 0.7 });

document.querySelectorAll('.skill-category').forEach(cat => skillObserver.observe(cat));

// Navbar Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = window.scrollY > 50 ? 'rgba(15, 15, 26, 0.98)' : 'rgba(15, 15, 26, 0.95)';
});

// Form
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (Connect with Formspree for real emails)');
    e.target.reset();
});
