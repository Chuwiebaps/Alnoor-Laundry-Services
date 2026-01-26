document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Success Simulation
    const signUpBtn = document.querySelector('.btn-signup-full');
    signUpBtn.innerText = "Creating Account...";
    signUpBtn.style.opacity = "0.7";
    signUpBtn.disabled = true;

    setTimeout(() => {
        alert("Account successfully created for Al Noor Laundry!");
        window.location.href = "index.html"; // Redirects back to your dashboard
    }, 1500);
});