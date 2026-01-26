document.addEventListener('DOMContentLoaded', () => {
    // Handle Book Now button click
    const bookBtn = document.querySelector('.btn-primary');
    bookBtn.addEventListener('click', () => {
        alert('Redirecting to Booking System...');
    });

    // Simple scroll reveal effect for cards
    const cards = document.querySelectorAll('.service-card, .info-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});