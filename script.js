// FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach((question) => {
    question.addEventListener('click', () => {
        const toggle = question.querySelector('.toggle');
        const answer = question.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggle.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});
