document.addEventListener("DOMContentLoaded", function() {
    // Redirects to the sign-up form when clicking on "Já tem uma conta?"
    document.getElementById("loga-se-btn").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "./Asset/login.html";
    });

    // Redirects to the login form when clicking on "Inscreva-se agora"
    document.getElementById("cadastre-se-btn").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "./Asset/formulário.html";
    });

    // Handle form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Sua mensagem foi enviada com sucesso!");
        // Here you could also add code to actually send the form data
        // For now, it just shows an alert
    });
});
