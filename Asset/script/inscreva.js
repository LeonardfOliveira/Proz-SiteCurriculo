// Função para mostrar o popup
function showPopup() {
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.width = '300px';
    popup.style.padding = '20px';
    popup.style.backgroundColor = 'white';
    popup.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.2)';
    popup.style.zIndex = '1000';

    const popupHeader = document.createElement('div');
    popupHeader.textContent = 'Inscrição';
    popupHeader.style.fontSize = '18px';
    popupHeader.style.fontWeight = 'bold';
    popupHeader.style.marginBottom = '10px';

    const popupBody = document.createElement('div');
    popupBody.textContent = 'Deseja se inscrever agora?';
    popupBody.style.marginBottom = '15px';

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Confirmar';
    confirmBtn.style.backgroundColor = '#007bff';
    confirmBtn.style.color = 'white';
    confirmBtn.style.border = 'none';
    confirmBtn.style.padding = '10px 15px';
    confirmBtn.style.cursor = 'pointer';
    confirmBtn.style.textAlign = 'center';
    confirmBtn.style.display = 'block';
    confirmBtn.style.width = '100%';

    const overlay = document.createElement('div');
    overlay.id = 'popupOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';

    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    popup.appendChild(popupHeader);
    popup.appendChild(popupBody);
    popup.appendChild(confirmBtn);

    // Função para esconder o popup
    function hidePopup() {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    }

    confirmBtn.addEventListener('click', function() {
        hidePopup();
        window.location.href = './Asset/style/cadastro.css'; // Substitua pelo URL da página de inscrição
    });

    overlay.addEventListener('click', function() {
        hidePopup();
    });
}

// Adiciona evento ao botão "INSCREVA-SE AGORA"
document.getElementById('inscrevaBtn').addEventListener('click', showPopup);


