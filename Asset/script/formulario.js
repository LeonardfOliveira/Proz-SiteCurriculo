document.addEventListener("DOMContentLoaded", function() {
    // Preenchendo o formulário automaticamente
    document.getElementById("resumo").value = "Desenvolvedor Full Stack com mais de 5 anos de experiência...";
    document.getElementById("softSkills").value = "Comunicação, Trabalho em equipe, Resolução de problemas...";
    document.getElementById("hardSkills").value = "JavaScript, React, Node.js, Python...";
    document.getElementById("hobbies").value = "Leitura, Fotografia, Corrida...";
    document.getElementById("empresas").value = "Tech Solutions";
    document.getElementById("areaAtuacao").value = "Desenvolvimento de Software";
    document.getElementById("cargo").value = "Desenvolvedor Full Stack";
    document.getElementById("mesinicio").value = "01";
    document.getElementById("anoinicio").value = "2019";
    document.getElementById("mesfim").value = "07";
    document.getElementById("anofim").value = "2023";
    document.getElementById("curso").value = "Engenharia de Software";
    document.getElementById("instituicao").value = "Universidade XYZ";
    document.getElementById("mesInicioCurso").value = "02";
    document.getElementById("anoiniciocurso").value = "2015";
    document.getElementById("mesfimCurso").value = "12";
    document.getElementById("anofimcurso").value = "2019";
    document.getElementById("idioma").value = "Inglês";
    document.getElementById("nivel").value = "fluente";
    document.getElementById("pais").value = "Estados Unidos";
    document.getElementById("anoInicioViagem").value = "2022";
    document.getElementById("descricaoViagem").value = "Intercâmbio cultural com foco em aperfeiçoamento do idioma...";
    document.getElementById("telefone").value = "(11) 99999-9999";
    document.getElementById("email").value = "email@exemplo.com";
    document.getElementById("linkedin").value = "https://linkedin.com/in/seu-perfil";
    document.getElementById("github").value = "https://github.com/seu-usuario";

    // Função para exibir mensagens e redirecionar
    function exibirMensagem(mensagem, redirecionarUrl) {
        alert(mensagem);
        window.location.href = redirecionarUrl;
    }

    // Event listener para o botão "Alterar"
    document.getElementById("alterar-sobre").addEventListener("click", function() {
        exibirMensagem("Informações alteradas com sucesso!", "./dashboard.html");
    });

    // Event listener para o botão "Salvar e Voltar ao Painel"
    document.getElementById("salvar-voltar-btn").addEventListener("click", function() {
        exibirMensagem("Informações salvas com sucesso!", "./dashboard.html");
    });

    // Event listener para o botão "Salvar e Ir para o Portfólio"
    document.getElementById("salvar-portfolio-btn").addEventListener("click", function() {
        exibirMensagem("Informações salvas com sucesso!", "./portfolio.html");
    });

    // Função para adicionar nova experiência
    document.getElementById("adicionar-experiencia").addEventListener("click", function() {
        // Lógica para adicionar nova experiência
        alert("Funcionalidade para adicionar nova experiência será implementada aqui.");
    });

    // Função para remover experiência
    document.getElementById("remover-experiencia").addEventListener("click", function() {
        // Lógica para remover experiência
        alert("Funcionalidade para remover experiência será implementada aqui.");
    });

    // Funções similares para formação, idiomas e viagens
    document.getElementById("adicionar-formacao").addEventListener("click", function() {
        alert("Funcionalidade para adicionar nova formação será implementada aqui.");
    });

    document.getElementById("remover-formacao").addEventListener("click", function() {
        alert("Funcionalidade para remover formação será implementada aqui.");
    });

    document.getElementById("adicionar-idioma").addEventListener("click", function() {
        alert("Funcionalidade para adicionar novo idioma será implementada aqui.");
    });

    document.getElementById("remover-idioma").addEventListener("click", function() {
        alert("Funcionalidade para remover idioma será implementada aqui.");
    });

    document.getElementById("adicionar-viagem").addEventListener("click", function() {
        alert("Funcionalidade para adicionar nova viagem será implementada aqui.");
    });

    document.getElementById("remover-viagem").addEventListener("click", function() {
        alert("Funcionalidade para remover viagem será implementada aqui.");
    });

    // Preencher opções de ano para viagens
    var selectAnoViagem = document.getElementById("anoInicioViagem");
    var anoAtual = new Date().getFullYear();
    for (var i = anoAtual; i >= 1950; i--) {
        var option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectAnoViagem.appendChild(option);
    }
});







