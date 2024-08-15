document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navOptions = document.querySelector('.nav-options');
    const themeSwitch = document.getElementById('theme-switch');
    
    // Toggle nav options on menu click
    menuToggle.addEventListener('click', function () {
        navOptions.classList.toggle('active');
    });

    // Load theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    // Toggle dark/light mode
    themeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
