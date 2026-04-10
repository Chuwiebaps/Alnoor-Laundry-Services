document.addEventListener('DOMContentLoaded', () => {
    const statusButtons = document.querySelectorAll('.status-btn');
    const paymentBtn = document.querySelector('.btn-mark-paid');
    const paymentText = document.querySelector('.status-pending');

    // Status Selection Logic
    statusButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            statusButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Payment Toggle
    paymentBtn.addEventListener('click', () => {
        paymentText.innerText = "Paid";
        paymentText.style.color = "#22c55e";
        paymentBtn.style.display = "none";
    });

    // Save Changes
    document.querySelector('.btn-save').addEventListener('click', () => {
        alert("Changes saved successfully!");
        window.location.href = "staff-dashboard.html";
    });
});