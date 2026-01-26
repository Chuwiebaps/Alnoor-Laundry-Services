document.addEventListener('DOMContentLoaded', () => {
    // Logout Logic
    const logoutBtn = document.querySelector('.btn-logout');
    logoutBtn.addEventListener('click', () => {
        if(confirm("Are you sure you want to logout?")) {
            window.location.href = "login.html";
        }
    });

    // Quick Actions
    const newBookingBtn = document.querySelector('.action-card.primary');
    newBookingBtn.addEventListener('click', () => {
        alert("Redirecting to the new booking form...");
    });

    // View Order Logic
    const viewButtons = document.querySelectorAll('.btn-view, .btn-full-details');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Fetching detailed order information...");
        });
    });
});