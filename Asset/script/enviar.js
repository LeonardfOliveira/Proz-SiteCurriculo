// Função para validar o formulário
function validarFormulario(acao) {
    // Seleciona todos os campos obrigatórios
    var camposObrigatorios = document.querySelectorAll('input[required], textarea[required], select[required]');
    var formValido = true;

    // Itera sobre os campos obrigatórios para verificar se estão preenchidos
    camposObrigatorios.forEach(function(campo) {
        if (!campo.value) {
            formValido = false;
            campo.style.borderColor = 'red';  // Destaca o campo não preenchido
        } else {
            campo.style.borderColor = '';  // Remove o destaque do campo preenchido
        }
    });

    if (formValido) {
        // Redireciona o usuário para a próxima página, dependendo do botão clicado
        if (acao === 'salvar') {
            window.location.href = './Portfólio/portfolio.html';  // Página para "Salvar"
        } else if (acao === 'alterar') {
            window.location.href = './Portfólio/portfolio.html';  // Página para "Alterar"
        } else if (acao === 'seguinte') {
            window.location.href = './Portfólio/portfolio.html';  // Página para "Seguinte"
        }
    } else {
        alert('Por favor, preencha todos os campos obrigatórios antes de prosseguir.');
    }
}



