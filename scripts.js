function alteraClasse(classe) {
    document.getElementById("cards").setAttribute("class", classe)
}

function alteraModal(classe, titulo, corpo) {
    document.getElementById("modal").setAttribute("class", classe)
    document.getElementById("overlay").setAttribute("class", classe)
    
    if(classe == 'on'){
        document.getElementById("titulo-modal").innerText = titulo
        document.getElementById("corpo-modal").innerText = corpo
    }else{
        document.querySelector(".card-aberto").classList.remove("card-aberto")
    }
}

function selecionaNaTelaPequena(){
    selecionado = document.getElementById("menu-cabecalho-tela-pequena").value;

    switch (selecionado) {
        case "l": alteraClasse("lista"); break;
        case "gg": alteraClasse("grade-grande"); break;
        case "gp": alteraClasse("grade-pequena");break;
    }
}

function addItemLista(){
    document.getElementById("msg-lista-vazia").style.display = "none"
    var li = document.createElement("li")
    
    var input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "Informe o título...")
    li.appendChild(input)

    var textArea = document.createElement("textarea")
    textArea.setAttribute("placeholder", "Informe o texto...")
    li.appendChild(textArea)
    
    var button = document.createElement("button")
    button.innerText = "Ver"
    button.disabled = true
    li.appendChild(button)

    button.addEventListener("click", function(){
        li.classList.add("card-aberto")
        alteraModal("on", input.value, textArea.value)
    })

    function toggleBotao(){
        console.log(input.value)
        if(input.value.trim().length > 0 && textArea.value.trim().length > 0 ){
            button.disabled = false
        }else{
            button.disabled = true
        }
    }

    input.addEventListener("keyup", toggleBotao)
    textArea.addEventListener("keyup", toggleBotao)

    document.getElementById("cards").appendChild(li)
}