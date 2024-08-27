document.addEventListener("DOMContentLoaded", function() {
    // Preenchendo o formulário automaticamente
    document.getElementById("resumo").value = "Engenheiro de Dados com 10 anos de experiência, especialista em comunicação eficaz, traduzindo conceitos técnicos para públicos não técnicos. Colaborativo e líder em projetos multifuncionais, com habilidade para resolver problemas complexos e adaptar-se rapidamente a novas tecnologias e metodologias.";
    document.getElementById("softSkills").value = "Especialista em comunicação eficaz, traduzindo conceitos técnicos para públicos não técnicos. Colaborativo e líder em projetos multifuncionais, com habilidade para resolver problemas complexos e adaptar-se rapidamente a novas tecnologias e metodologias. ";
    document.getElementById("hardSkills").value = "Experiência em big data, ETL e análise avançada. Proficiência em Python, SQL e R, além de ferramentas como Apache Spark, Hadoop e AWS Redshift. Experiência em bancos de dados SQL e NoSQL, e metodologias Agile e Scrum. ";
    document.getElementById("hobbies").value = "Apaixonado por tecnologia e inovação. Nos momentos de lazer, gosta de explorar novas trilhas, viajar, praticar musculação, ler ficção científica e praticar fotografia. Aprecia música clássica e é entusiasta de xadrez, sempre buscando novos desafios estratégicos. ";
    document.getElementById("empresas").value = "Tech Solutions";
    document.getElementById("areaAtuacao").value = "Desenvolvimento de Software";
    document.getElementById("cargo").value = "Engenheiro de Dados Sênior ";
    document.getElementById("mesinicio").value = "01";
    document.getElementById("anoinicio").value = "2020";
    document.getElementById("mesfim").value = "07";
    document.getElementById("anofim").value = "2024";
    document.getElementById("curso").value = "Mestrado em Ciência da Computação";
    document.getElementById("instituicao").value = "Universidade Tech";
    document.getElementById("mesInicioCurso").value = "02";
    document.getElementById("anoiniciocurso").value = "2018";
    document.getElementById("mesfimCurso").value = "12";
    document.getElementById("anofimcurso").value = "2022";
    document.getElementById("idioma").value = "Inglês";
    document.getElementById("nivel").value = "fluente";
    document.getElementById("pais").value = "Estados Unidos";
    document.getElementById("anoInicioViagem").value = "2022";
    document.getElementById("descricaoViagem").value = "Ao longo dos últimos anos, tive a oportunidade de viajar para diversas regiões do Brasil, explorando tanto os principais centros urbanos quanto áreas rurais e remotas. Cada viagem trouxe uma nova perspectiva, ampliando minha compreensão cultural e social. Essas experiências não só enriqueceram minha vida pessoal, mas também contribuíram significativamente para meu desenvolvimento profissional, permitindo-me adaptar melhor a diferentes ambientes e situações no mercado de trabalho.";
    document.getElementById("telefone").value = "(11) 99999-9999";
    document.getElementById("email").value = "jonas.abraam@prozconnect.com";
    document.getElementById("linkedin").value = "https://linkedin.com/in/jonasabraam20555";
    document.getElementById("github").value = "https://github.com/jonabraam";

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







