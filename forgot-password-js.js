document.addEventListener('DOMContentLoaded', () => {
    const resetForm = document.getElementById('resetForm');

    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const submitBtn = resetForm.querySelector('button');

        // Visual feedback
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert(`A reset link has been sent to: ${email}\nPlease check your inbox and spam folder.`);
            
            // Redirect back to login after confirmation
            window.location.href = "login.html";
        }, 1500);
    });
});