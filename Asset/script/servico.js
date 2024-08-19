// script.js
document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            alert(`Você clicou no ícone de ${this.alt}`);
        });
    });
});
