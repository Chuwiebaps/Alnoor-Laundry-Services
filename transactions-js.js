document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const tableRows = document.querySelectorAll('#transactionBody tr');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update button styles
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            tableRows.forEach(row => {
                const method = row.getAttribute('data-method');
                const status = row.getAttribute('data-status');

                if (filterValue === 'all') {
                    row.style.display = '';
                } else if (filterValue === method || filterValue === status) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });

    // Logout Functionality
    document.querySelector('.btn-logout').addEventListener('click', () => {
        if(confirm("Are you sure you want to logout?")) {
            window.location.href = "login.html";
        }
    });
});