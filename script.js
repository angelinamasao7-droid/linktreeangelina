// =====================================================
// ANGELINA MASÃO - PREMIUM LINKTREE
// Interactive JavaScript
// =====================================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to elements
document.querySelectorAll('.social-link, .pack-card, .testimonial, .gallery-item').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    observer.observe(el);
});

// Touch feedback for mobile
document.querySelectorAll('.social-link, .pack-button').forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.98)';
    });
    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// Console Easter Egg
console.log('%c💋 Angelina Masão',
    'color: #d4a574; font-size: 20px; font-weight: bold;');
console.log('%cBem-vindo ao meu espaço! 💕',
    'color: #e8c9a8; font-size: 14px;');
