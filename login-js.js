document.addEventListener('DOMContentLoaded', () => {
    const customerTab = document.getElementById('customerTab');
    const staffTab = document.getElementById('staffTab');
    const loginForm = document.getElementById('loginForm');

    // Toggle logic
    customerTab.addEventListener('click', () => {
        customerTab.classList.add('active');
        staffTab.classList.remove('active');
    });

    staffTab.addEventListener('click', () => {
        staffTab.classList.add('active');
        customerTab.classList.remove('active');
    });

    // Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const loginType = document.querySelector('.tab-btn.active').innerText;
        const email = document.getElementById('email').value;

        alert(`Attempting ${loginType} for: ${email}`);
        
        // Redirect to main dashboard
        window.location.href = "dashboard.html"; 
    });
});