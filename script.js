// Gestion des éléments FAQ
document.querySelectorAll('.faq-item').forEach(item => {
    const toggle = item.querySelector('.toggle');
    toggle.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

// Carousel automatique
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');

setInterval(() => {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
    currentSlide = (currentSlide + 1) % slides.length;
}, 3000);
