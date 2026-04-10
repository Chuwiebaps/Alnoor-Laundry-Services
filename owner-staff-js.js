document.addEventListener('DOMContentLoaded', () => {
    const calendarTrigger = document.getElementById('calendarTrigger');
    const datePicker = document.getElementById('datePicker');
    const displayDate = document.getElementById('displayDate');

    // Calendar Toggle
    calendarTrigger.addEventListener('click', () => {
        datePicker.showPicker();
    });

    datePicker.addEventListener('change', (e) => {
        const selectedDate = new Date(e.target.value);
        const options = { month: 'long', year: 'numeric' };
        displayDate.innerText = selectedDate.toLocaleDateString('en-US', options) + " (Monthly)";
        
        // Visual feedback
        const cards = document.querySelectorAll('.performance-card');
        cards.forEach(card => {
            card.style.opacity = '0.5';
            setTimeout(() => card.style.opacity = '1', 300);
        });
    });

    // Logout Functionality
    document.querySelector('.btn-logout').addEventListener('click', () => {
        if (confirm('Logout of Owner Session?')) {
            window.location.href = 'login.html';
        }
    });
});