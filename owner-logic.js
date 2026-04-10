document.addEventListener('DOMContentLoaded', () => {
    const calendarTrigger = document.getElementById('calendarTrigger');
    const datePicker = document.getElementById('datePicker');
    const dateText = document.getElementById('dateText');
    const btnLogout = document.querySelector('.btn-logout');

    // 1. CALENDAR LOGIC
    // Click the pill to trigger the hidden date input
    calendarTrigger.addEventListener('click', () => {
        datePicker.showPicker(); // Modern way to trigger native date picker
    });

    // Update the text when a date is selected
    datePicker.addEventListener('change', (e) => {
        const selectedDate = new Date(e.target.value);
        
        // Format the date: "Friday, April 10, 2026"
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = selectedDate.toLocaleDateString('en-US', options);
        
        dateText.innerText = formattedDate;

        // Visual feedback: Subtle flash on metrics when date changes
        const values = document.querySelectorAll('.kpi-value');
        values.forEach(val => {
            val.style.opacity = '0.3';
            setTimeout(() => val.style.opacity = '1', 300);
        });
    });

    // 2. LOGOUT LOGIC
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            const confirmLogout = confirm("Are you sure you want to logout of the Al Noor Owner Portal?");
            if (confirmLogout) {
                // Redirect to login page
                window.location.href = 'login.html'; 
            }
        });
    }

    // 3. TAB NAVIGATION (Optional enhancement)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});