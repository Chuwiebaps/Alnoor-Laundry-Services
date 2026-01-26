document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('customerSearch');
    const tableRows = document.querySelectorAll('#customerTableBody tr');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();

        tableRows.forEach(row => {
            // Search across Name, Email, and ID
            const text = row.innerText.toLowerCase();
            if (text.includes(term)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Logout
    document.querySelector('.btn-logout').addEventListener('click', () => {
        if(confirm("Are you sure you want to logout?")) {
            window.location.href = "login.html";
        }
    });
});