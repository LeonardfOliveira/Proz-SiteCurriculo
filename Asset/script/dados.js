document.addEventListener("DOMContentLoaded", function() {
    // Preenchendo o formulário automaticamente
    document.getElementById("cep").value = "12345-678";
    document.getElementById("endereco").value = "Rua Exemplo, 123";
    document.getElementById("telefone").value = "(11) 98765-4321";
    document.getElementById("cidade").value = "São Paulo";
    document.getElementById("estado").value = "SP";
    document.getElementById("pais").value = "Brasil";
    document.getElementById("sexo").value = "masculino";
    document.getElementById("orientacao-sexual").value = "heterossexual";
    document.getElementById("raca").value = "branca";
    document.getElementById("pcd").value = "nao";
    document.getElementById("data-nascimento").value = "1990-01-01";

    // Mostrando ou escondendo o campo de tipo de deficiência baseado na seleção
    const pcdElement = document.getElementById("pcd");
    const deficienciaGroup = document.getElementById("deficiencia-group");
    
    pcdElement.addEventListener("change", function() {
        deficienciaGroup.style.display = this.value === "sim" ? "block" : "none";
    });

    // Função para exibir um alerta de sucesso e redirecionar
    function showSuccessAlert(message, redirectUrl) {
        alert(message);
        window.location.href = redirectUrl;
    }

    // Função chamada ao clicar no botão "Alterar"
    window.alterarFormulario = function() {
        showSuccessAlert('Informações alteradas com sucesso!', './dashboard.html');
    }

    // Função chamada ao clicar no botão "Salvar"
    window.salvarFormulario = function() {
        showSuccessAlert('Informações salvas com sucesso!', './dashboard.html');
    }
});





