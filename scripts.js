document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-anotacao');
    form.addEventListener('submit', adicionarAnotacao);
});

function adicionarAnotacao(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    let disciplina = document.querySelector("#disciplina-text").value;
    let titulo = document.querySelector("#titulo-text").value;
    let descricao = document.querySelector("#anotation-text").value;

    if (disciplina === "" || titulo === "" || descricao === "") {
        alert("Adicione valores válidos!");
        return;
    }

    adicionarTabela(disciplina, titulo, descricao);

    document.querySelector("#disciplina-text").value = " ";
    document.querySelector("#titulo-text").value = " ";
    document.querySelector("#anotation-text").value = " ";
    fechaModal();
}

function adicionarTabela(disciplina, titulo, descricao) {
    let index = Date.now(); // Use um timestamp ou um índice único

    let html = `
        <td class="description">${disciplina}</td>
        <td class="income">${titulo}</td>
        <td class="date">${new Date().toLocaleDateString()}</td>
        <td>
            <ion-icon onclick="toggleDescricao(${index})" name="book-outline"></ion-icon>
            <ion-icon onclick="deletarAnotacao(${index})" name="trash-bin-outline"></ion-icon>
        </td>
    `;

    let htmlDescricao = `
        <tr class="descricao-row" id="descricao-${index}" style="display: none;">
            <td colspan="4"><p class="paragraph">${descricao}</p></td>
        </tr>
    `;
            
    let tbody = document.querySelector("tbody");
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tr.dataset.index = index;

    tbody.appendChild(tr);
    tbody.insertAdjacentHTML('beforeend', htmlDescricao);
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
    // Remove a linha principal da tabela
    let linhaPrincipal = document.querySelector(`tr[data-index='${index}']`);
    if (linhaPrincipal) {
        linhaPrincipal.remove();
    }
    
    // Remove a linha de descrição associada
    let descricaoRow = document.getElementById(`descricao-${index}`);
    if (descricaoRow) {
        descricaoRow.remove();
    }
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
