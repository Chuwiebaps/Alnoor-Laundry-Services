document.addEventListener('DOMContentLoaded', () => {
    // Handle Manage Button Clicks
    const manageBtns = document.querySelectorAll('.btn-manage');
    
    manageBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const orderId = row.querySelector('.bold').innerText;
            const currentStatus = row.querySelector('.status').innerText;
            
            alert(`Opening management panel for ${orderId}\nCurrent Status: ${currentStatus}`);
            // In a real app, this would open a modal to update the status/payment
        });
    });

    // Logout
    document.querySelector('.btn-logout').addEventListener('click', () => {
        if(confirm("Exit Staff Portal?")) {
            window.location.href = "login.html";
        }
    });
});