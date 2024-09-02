document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-anotacao');
    form.addEventListener('submit', adicionarAnotacao);
});

function adicionarTabela(anotacao) {
    let html = `
        <td class="description">${anotacao.disciplina}</td>
        <td class="income">${anotacao.titulo}</td>
        <td class="date">${anotacao.data}</td>
        <td>
            <ion-icon onclick="toggleDescricao(${anotacao.index})" name="book-outline"></ion-icon>
            <ion-icon onclick="deletarAnotacao(${anotacao.index})" name="trash-bin-outline"></ion-icon>
        </td>
    `;

    let htmlDescricao = `
        <tr class="descricao-row" id="descricao-${anotacao.index}" style="display: none;">
            <td colspan="4"><p class="paragraph">${anotacao.descricao}</p></td>
        </tr>
    `;

    let tbody = document.querySelector("tbody");
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tr.dataset.index = anotacao.index;

    tbody.appendChild(tr);
    tbody.insertAdjacentHTML('beforeend', htmlDescricao);
}


function salvarAnotacaoLocalStorage(anotacao) {
    let anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || [];
    anotacoes.push(anotacao);
    localStorage.setItem('anotacoes', JSON.stringify(anotacoes));
}

function adicionarAnotacao(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    let disciplina = document.querySelector("#disciplina-text").value;
    let titulo = document.querySelector("#titulo-text").value;
    let descricao = document.querySelector("#anotation-text").value;

    if (disciplina === "" || titulo === "" || descricao === "") {
        alert("Adicione valores válidos!");
        return;
    }

    let index = Date.now(); // Use um timestamp como chave única
    let anotacao = {
        disciplina: disciplina,
        titulo: titulo,
        descricao: descricao,
        data: new Date().toLocaleDateString(),
        index: index
    };

    salvarAnotacaoLocalStorage(anotacao);
    adicionarTabela(anotacao);

    // Limpar os campos de entrada
    document.querySelector("#disciplina-text").value = "";
    document.querySelector("#titulo-text").value = "";
    document.querySelector("#anotation-text").value = "";
    fechaModal();
}




function carregarAnotacoes() {
    let anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || [];
    anotacoes.forEach(adicionarTabela);
}

document.addEventListener('DOMContentLoaded', () => {
    carregarAnotacoes(); // Carrega as anotações salvas
    const form = document.getElementById('form-anotacao');
    form.addEventListener('submit', adicionarAnotacao);
});


function adicionarTabela(anotacao) {
    let html = `
        <td class="description">${anotacao.disciplina}</td>
        <td class="income">${anotacao.titulo}</td>
        <td class="date">${anotacao.data}</td>
        <td>
            <ion-icon onclick="toggleDescricao(${anotacao.index})" name="book-outline"></ion-icon>
            <ion-icon onclick="deletarAnotacao(${anotacao.index})" name="trash-bin-outline"></ion-icon>
        </td>
    `;

    let htmlDescricao = `
        <tr class="descricao-row" id="descricao-${anotacao.index}" style="display: none;">
            <td colspan="4"><p class="paragraph">${anotacao.descricao}</p></td>
        </tr>
    `;

    let tbody = document.querySelector("tbody");
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tr.dataset.index = anotacao.index;

    tbody.appendChild(tr);
    tbody.insertAdjacentHTML('beforeend', htmlDescricao);
}

function carregarAnotacoes() {
    let anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || [];
    anotacoes.forEach(adicionarTabela);
}




function toggleDescricao(index) {
    let descricaoRow = document.getElementById(`descricao-${index}`);
    if (descricaoRow.style.display === "none" || descricaoRow.style.display === "") {
        descricaoRow.style.display = "table-row";
    } else {
        descricaoRow.style.display = "none";
    }
}

function deletarAnotacao(index) {
    
    let linhaPrincipal = document.querySelector(`tr[data-index='${index}']`);
    if (linhaPrincipal) {
        linhaPrincipal.remove();
    }
    
    
    let descricaoRow = document.getElementById(`descricao-${index}`);
    if (descricaoRow) {
        descricaoRow.remove();
    }

    
    let anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || [];
    anotacoes = anotacoes.filter(anotacao => anotacao.index !== index);
    localStorage.setItem('anotacoes', JSON.stringify(anotacoes));
}


function lerAnotacao(index) {
    let descricao = document.querySelector(`#descricao-${index}`).innerHTML;
    alert("Descrição: " + descricao);
}

function fechaModal() {
    let element = document.querySelector("#popup1");
    if (element) {
        element.classList.remove("overlay");
        element.classList.add("out");
    }
}

function abrirModal() {
    let element = document.querySelector("#popup1");
    if (element) {
        element.classList.remove("out");
        element.classList.add("overlay");
    }
}

