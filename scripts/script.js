const themeSwitch = document.querySelector('#theme-switch');

// Check system theme and change switch value
if (window.matchMedia) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
        themeSwitch.checked = prefersDark;
    }
}

// Change theme based on switch changes
themeSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
});