// ADD TO END OF script.js

// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const sunIcon = '<i class="fas fa-sun"></i>';
const moonIcon = '<i class="fas fa-moon"></i>';

// Check saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
    themeToggle.innerHTML = moonIcon;
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    if (body.classList.contains('light')) {
        themeToggle.innerHTML = moonIcon;
        localStorage.setTheme('light');
    } else {
        themeToggle.innerHTML = sunIcon;
        localStorage.setItem('theme', 'dark');
    }
});