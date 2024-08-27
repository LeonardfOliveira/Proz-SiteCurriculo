// Função para buscar vagas na internet
async function searchNewJobs() {
    const location = document.getElementById('location').value;
    const city = document.getElementById('city').value;
    const search = document.getElementById('search').value;
    const jobListings = document.getElementById('job-listings');
    
    jobListings.innerHTML = '<p>Buscando vagas...</p>';

    try {
        // Substitua a URL abaixo pela URL da API real que você está usando
        const response = await fetch(`https://api.example.com/jobs?location=${location}&city=${city}&search=${encodeURIComponent(search)}`);
        const data = await response.json();

        if (data.length === 0) {
            jobListings.innerHTML = '<p>Desculpe, nenhuma vaga encontrada para a sua busca.</p>';
        } else {
            jobListings.innerHTML = ''; // Limpa o conteúdo anterior
            data.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job');
                jobElement.innerHTML = `
                    <h3>${job.title}</h3>
                    <p>${job.location}</p>
                    <p>${job.description}</p>
                    <button onclick="applyForJob('${job.title}')">Candidatar-se</button>
                `;
                jobListings.appendChild(jobElement);
            });
        }
    } catch (error) {
        jobListings.innerHTML = '<p>Ocorreu um erro ao buscar vagas. Tente novamente mais tarde.</p>';
    }
}

// Função para filtrar vagas conforme os critérios selecionados
function filterJobs() {
    // Como a busca já está sendo feita em searchNewJobs, você pode simplesmente chamar essa função
    searchNewJobs();
}

// Função para aplicar para uma vaga
function applyForJob(jobTitle) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    popupMessage.textContent = `Candidatado à vaga de ${jobTitle}. Agora é só aguardar o recrutador entrar em contato.`;
    popup.classList.remove('hidden');
    popup.classList.add('visible');
}

// Função para fechar o popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('visible');
    popup.classList.add('hidden');
}

// Função para buscar vagas na internet
async function searchNewJobs() {
    const location = document.getElementById('location').value;
    const city = document.getElementById('city').value;
    const search = document.getElementById('search').value;
    const jobListings = document.getElementById('job-listings');
    
    jobListings.innerHTML = '<p>Buscando vagas...</p>';

    try {
        // Substitua a URL abaixo pela URL da API real que você está usando
        const response = await fetch(`https://api.example.com/jobs?location=${location}&city=${city}&search=${encodeURIComponent(search)}`);
        const data = await response.json();

        if (data.length === 0) {
            jobListings.innerHTML = '<p>Desculpe, nenhuma vaga encontrada para a sua busca. Mostrando vagas padrão.</p>';
            showDefaultJobs(); // Exibe as vagas padrão
        } else {
            jobListings.innerHTML = ''; // Limpa o conteúdo anterior
            data.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job');
                jobElement.innerHTML = `
                    <h3>${job.title}</h3>
                    <p>${job.city}, ${job.state}</p>
                    <p>${job.description}</p>
                    <button onclick="applyForJob('${job.title}')">Candidatar-se</button>
                `;
                jobListings.appendChild(jobElement);
            });
        }
    } catch (error) {
        jobListings.innerHTML = '<p>Erro ao buscar vagas. Tente novamente mais tarde.</p>';
    }
}

// Função para limpar filtros
function clearFilters() {
    document.getElementById('location').value = '';
    document.getElementById('city').value = '';
    document.getElementById('search').value = '';
    showDefaultJobs(); // Exibe as vagas padrão
}

// Função para exibir vagas padrão
function showDefaultJobs() {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = `
        <div class="job" data-state="sp" data-city="sp-sao-paulo" data-title="Desenvolvedor Front-End">
            <h3>Desenvolvedor Front-End</h3>
            <p>São Paulo, SP</p>
            <p>Desenvolva interfaces de usuário modernas e responsivas.</p>
            <button onclick="applyForJob('Desenvolvedor Front-End')">Candidatar-se</button>
        </div>
        <div class="job" data-state="rj" data-city="rj-rio-de-janeiro" data-title="Desenvolvedor Back-End">
            <h3>Desenvolvedor Back-End</h3>
            <p>Rio de Janeiro, RJ</p>
            <p>Implemente a lógica de servidor e bancos de dados para aplicativos da web.</p>
            <button onclick="applyForJob('Desenvolvedor Back-End')">Candidatar-se</button>
        </div>
        <div class="job" data-state="mg" data-city="mg-belo-horizonte" data-title="Engenheiro DevOps">
            <h3>Engenheiro DevOps</h3>
            <p>Belo Horizonte, MG</p>
            <p>Automatize processos de CI/CD e gerencie infraestruturas em nuvem.</p>
            <button onclick="applyForJob('Engenheiro DevOps')">Candidatar-se</button>
        </div>
        <div class="job" data-state="pr" data-city="pr-curitiba" data-title="Desenvolvedor Mobile">
            <h3>Desenvolvedor Mobile</h3>
            <p>Curitiba, PR</p>
            <p>Crie e mantenha aplicativos móveis para Android e iOS.</p>
            <button onclick="applyForJob('Desenvolvedor Mobile')">Candidatar-se</button>
        </div>
        <div class="job" data-state="sp" data-city="sp-sao-paulo" data-title="Designer UX/UI">
            <h3>Designer UX/UI</h3>
            <p>São Paulo, SP</p>
            <p>Projete experiências de usuário intuitivas e designs de interface atraentes.</p>
            <button onclick="applyForJob('Designer UX/UI')">Candidatar-se</button>
        </div>
    `;
}

function applyForJob(jobTitle) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.innerText = `Sua candidatura para "${jobTitle}" foi recebida. Aguarde o recrutador entrar em contato.`;
    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

// Inicializa com vagas padrão
showDefaultJobs();












