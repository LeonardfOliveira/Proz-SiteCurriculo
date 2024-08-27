document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do formulário
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirpassword');
    const agreeCheckbox = document.getElementById('newlatter');

    // Preenche os campos com valores de exemplo
    firstnameInput.value = 'Jonas';
    lastnameInput.value = 'Abraam';
    emailInput.value = 'jonas.abraam@prozconnect.com';
    passwordInput.value = 'senhaSegura123';
    confirmPasswordInput.value = 'senhaSegura123';
    agreeCheckbox.checked = true;

    // Seleciona o formulário
    const form = document.querySelector('form');

    // Adiciona um evento de submit ao formulário
    form.addEventListener('submit', (event) => {
        // Evita o envio padrão do formulário
        event.preventDefault();

        // Exibe o popup com a mensagem
        alert('Cadastro criado com sucesso! Um e-mail foi enviado para confirmação.');

        // Redireciona o usuário para a página inicial após 1 segundo
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1000);
    });
});



