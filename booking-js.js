document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Validate Service Selection
        const selectedServices = document.querySelectorAll('input[name="service"]:checked');
        if (selectedServices.length === 0) {
            alert("Please select at least one service to proceed.");
            return;
        }

        // 2. Calculate Total (Visual feedback)
        let total = 0;
        selectedServices.forEach(s => total += parseInt(s.value));

        // 3. Success Simulation
        const submitBtn = document.querySelector('.btn-submit');
        submitBtn.innerText = "Submitting Order...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        setTimeout(() => {
            alert(`Booking successful!\nTotal: ₱${total}\nYour laundry is scheduled for pickup.`);
            window.location.href = "dashboard.html";
        }, 1500);
    });

    // Handle logout
    document.querySelector('.btn-logout').addEventListener('click', () => {
        if(confirm("Are you sure you want to logout?")) {
            window.location.href = "login.html";
        }
    });
});