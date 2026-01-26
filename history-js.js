document.addEventListener('DOMContentLoaded', () => {
    // Add click event to all "View Details" buttons
    const viewButtons = document.querySelectorAll('.btn-view');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Find the Order ID in the same row
            const row = e.target.closest('tr');
            const orderId = row.querySelector('.bold').innerText;
            
            alert(`Opening details for ${orderId}...`);
            // In a real app, you would redirect to a specific order page:
            // window.location.href = `order-details.html?id=${orderId}`;
        });
    });

    // Handle logout
    document.querySelector('.btn-logout').addEventListener('click', () => {
        if(confirm("Log out from Al Noor?")) {
            window.location.href = "login.html";
        }
    });
});