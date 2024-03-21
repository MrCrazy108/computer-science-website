document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('footer p').textContent += ` - ${new Date().getFullYear()}`;
});
