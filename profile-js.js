document.addEventListener('DOMContentLoaded', () => {
    // --- PROFILE EDIT LOGIC ---
    const editBtn = document.getElementById('editBtn');
    const cancelBtn = document.getElementById('cancelEdit');
    const viewMode = document.getElementById('viewMode');
    const editMode = document.getElementById('editMode');
    
    // Toggle to Edit Mode
    editBtn.addEventListener('click', () => {
        viewMode.classList.add('hidden');
        editMode.classList.remove('hidden');
        editBtn.classList.add('hidden');
    });

    // Cancel Edit
    cancelBtn.addEventListener('click', () => {
        viewMode.classList.remove('hidden');
        editMode.classList.add('hidden');
        editBtn.classList.remove('hidden');
    });

    // Handle Profile Update
    editMode.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Update Display Text
        document.getElementById('display-name').innerText = document.getElementById('input-name').value;
        document.getElementById('display-email').innerText = document.getElementById('input-email').value;
        document.getElementById('display-phone').innerText = document.getElementById('input-phone').value;

        // Switch back to view mode
        viewMode.classList.remove('hidden');
        editMode.classList.add('hidden');
        editBtn.classList.remove('hidden');
        
        alert("Profile updated successfully!");
    });

    // --- PASSWORD CHANGE LOGIC ---
    const passwordForm = document.getElementById('passwordForm');
    const passMsg = document.getElementById('pass-msg');

    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newPass = document.getElementById('new-pass').value;
        const confirmPass = document.getElementById('confirm-pass').value;

        if (newPass !== confirmPass) {
            passMsg.innerText = "New passwords do not match!";
            passMsg.className = "message error";
            return;
        }

        // Simulate API call
        const btn = passwordForm.querySelector('.btn-update');
        btn.innerText = "Updating...";
        btn.disabled = true;

        setTimeout(() => {
            passMsg.innerText = "Password updated successfully!";
            passMsg.className = "message success";
            btn.innerText = "Update Password";
            btn.disabled = false;
            passwordForm.reset();
            
            // Hide message after 3 seconds
            setTimeout(() => { passMsg.className = "message"; }, 3000);
        }, 1200);
    });

    // Logout confirmation
    document.querySelector('.btn-logout').addEventListener('click', () => {
        if(confirm("Are you sure you want to logout?")) {
            window.location.href = "login.html";
        }
    });
});