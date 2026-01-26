document.addEventListener('DOMContentLoaded', () => {
    // Logout Logic
    const logoutBtn = document.querySelector('.btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if(confirm("Logout from Al Noor?")) {
                window.location.href = "login.html";
            }
        });
    }

    // Optional: Simulate live tracking updates
    console.log("Order Tracking Live: ORD-2024-001 connected.");
});