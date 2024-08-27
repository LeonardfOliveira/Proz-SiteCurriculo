document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("login-form");
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("open-btn");

    // Preenche os campos com valores de exemplo
    loginInput.value = 'jonas.abraam@prozconnect.com';
    passwordInput.value = 'senhaExemplo123';

    form.addEventListener("submit", function(event) {
       
        event.preventDefault();

        let isValid = true;
      
        loginInput.classList.remove("error");
        passwordInput.classList.remove("error");

        const loginValue = loginInput.value.trim();
        if (loginValue === "" || !loginValue.includes("@") || !loginValue.includes(".com")) {
            isValid = false;
            loginInput.classList.add("error");
            alert("Por favor, insira um login válido!");
        }

        const passwordValue = passwordInput.value.trim();
        if (passwordValue === "") {
            isValid = false;
            passwordInput.classList.add("error");
            alert("Por favor, insira sua senha.");
        } else if (passwordValue.length < 8) {
            isValid = false;
            passwordInput.classList.add("error");
            alert("A senha deve ter pelo menos 8 caracteres.");
        }

        if (isValid) {
            // Exibe o popup de sucesso
            alert('Login feito com sucesso!');
            
            // Redireciona para a página de dashboard após 1 segundo
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);
        } else {
            loginButton.disabled = true; 
        }
    });

    loginInput.addEventListener("input", function() {
        loginButton.disabled = false;
    });

    passwordInput.addEventListener("input", function() {
        loginButton.disabled = false;
    });
});



