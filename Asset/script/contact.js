document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("exampleInputName");
    const emailInput = document.getElementById("exampleInputEmail");
    const phoneInput = document.getElementById("exampleInputPhone");
    const mensagemInput = document.getElementById("message");
    const sendButton = document.getElementById("send-btn");

    sendButton.addEventListener("click", function(event) {
        event.preventDefault();

        let isValid = true;

        // Remove a classe de erro, se houver
        nameInput.classList.remove("error");
        emailInput.classList.remove("error");
        phoneInput.classList.remove("error");
        mensagemInput.classList.remove("error");

        // Validação do nome
        if (nameInput.value.trim() === "") {
            isValid = false;
            nameInput.classList.add("error");
            alert("Por favor, insira seu nome.");
        }

        // Validação do e-mail
        const emailValue = emailInput.value.trim();
        if (emailValue === "" || !emailValue.includes("@")) {
            isValid = false;
            emailInput.classList.add("error");
            alert("Por favor, insira um e-mail válido com '@'.");
        }

        // Validação do telefone
        const phoneValue = phoneInput.value.trim();
        const phonePattern = /^\(?\d{2}\)?[\s-]?\d{5}-?\d{4}$/;
        if (phoneValue === "" || !phonePattern.test(phoneValue)) {
            isValid = false;
            phoneInput.classList.add("error");
            alert("Por favor, insira um telefone válido no formato (11) 00000-0000.");
        }

        // Validação da mensagem
        if (mensagemInput.value.trim() === "") {
            isValid = false;
            mensagemInput.classList.add("error");
            alert("Por favor, insira sua mensagem.");
        }

        // Se for válido, exibe a mensagem de sucesso e limpa o formulário
        if (isValid) {
            alert("Sua mensagem foi enviada com sucesso!");
            form.reset(); // Limpa o formulário
        } else {
            sendButton.disabled = true; 
        }
    });

    // Habilita o botão de enviar novamente se houver mudanças no formulário
    [nameInput, emailInput, phoneInput, mensagemInput].forEach(input => {
        input.addEventListener("input", function() {
            sendButton.disabled = false;
        });
    });
});











