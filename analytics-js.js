document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.tgl');
    
    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Toggle
            const parent = btn.parentElement;
            parent.querySelectorAll('.tgl').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Simulate data change
            const bars = document.querySelectorAll('.bar-fill');
            bars.forEach(bar => {
                const randomWidth = Math.floor(Math.random() * 60) + 30; // 30-90%
                bar.style.transition = 'width 0.5s ease-in-out';
                bar.style.width = randomWidth + '%';
            });
        });
    });

    // Logout
    document.querySelector('.btn-logout').addEventListener('click', () => {
        if(confirm("Are you sure you want to logout?")) {
            window.location.href = "login.html";
        }
    });
});