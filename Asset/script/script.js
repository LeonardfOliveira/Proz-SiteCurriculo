document.addEventListener('DOMContentLoaded', function() {
    function preencherAnos(id) {
        const select = document.getElementById(id);
        const anoAtual = new Date().getFullYear();
        for (let i = anoAtual; i >= 1900; i--) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
    }

    // Preenche os campos de ano para admissão e demissão
    preencherAnos('anoInicio');
    preencherAnos('anoFim');
});

