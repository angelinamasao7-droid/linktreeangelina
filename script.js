// =====================================================
// ANGELINA MASÃO - PREMIUM LINKTREE
// Interactive JavaScript
// =====================================================

// Notification Functions
function closeNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('hidden');
}

// Auto-hide notification after 8 seconds
setTimeout(() => {
    closeNotification();
}, 8000);

// Review Modal Functions
function showReviewMessage() {
    const modal = document.getElementById('reviewModal');
    modal.classList.add('active');
}

function closeReviewModal() {
    const modal = document.getElementById('reviewModal');
    modal.classList.remove('active');
}

// Close modal on overlay click
document.getElementById('reviewModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeReviewModal();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        closeReviewModal(); // Close modal if open
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
document.querySelectorAll('.social-link, .pack-button, .add-review-btn').forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.98)';
    });
    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// Console Easter Egg
console.log('%c💋 Angelina Masão',
    'color: #C9A962; font-size: 20px; font-weight: bold;');
console.log('%cBem-vindo ao meu espaço exclusivo! 💕',
    'color: #E8D5A3; font-size: 14px;');
