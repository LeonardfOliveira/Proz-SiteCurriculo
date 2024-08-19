document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('senha-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword === confirmPassword) {
            alert('Senha alterada com sucesso!');
            window.location.href = '../index.html';
        } else {
            alert('As senhas não correspondem. Por favor, tente novamente.');
        }
    });
});

