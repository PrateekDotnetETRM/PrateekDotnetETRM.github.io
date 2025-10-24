// ========================================
// FULL script.js – Prateek Kumar Singh Resume
// Features: Dark/Light, Print, Animations, PDF Feedback
// ========================================

// 1. DARK/LIGHT TOGGLE
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const sunIcon = '<i class="fas fa-sun"></i>';
const moonIcon = '<i class="fas fa-moon"></i>';

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeToggle.innerHTML = moonIcon;
} else {
    themeToggle.innerHTML = sunIcon;
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeToggle.innerHTML = moonIcon;
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = sunIcon;
        localStorage.setItem('theme', 'light');
    }
});

// 2. PRINT BUTTON
document.querySelector('.print-btn').addEventListener('click', (e) => {
    e.preventDefault();
    if (body.classList.contains('dark')) {
        alert('Switching to Light Mode for printing...');
        body.classList.remove('dark');
        themeToggle.innerHTML = sunIcon;
    }
    setTimeout(() => window.print(), 300);
});

// 3. PDF DOWNLOAD FEEDBACK
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    const btn = this;
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    setTimeout(() => btn.innerHTML = original, 1500);
});

// 4. FADE-IN ON SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .job').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(15px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// 5. PRINT OPTIMIZATION
window.onbeforeprint = () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        themeToggle.innerHTML = sunIcon;
    }
};
window.onafterprint = () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        themeToggle.innerHTML = moonIcon;
    }
};

// 6. CONSOLE
console.log('%c Resume Loaded | Prateek Kumar Singh', 'color: #0066cc; font-size: 14px; font-weight: bold;');