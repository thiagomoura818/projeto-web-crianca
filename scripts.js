function fechaModal() {
    // Seleciona o primeiro elemento com a classe 'overlay'
    let element = document.querySelector(".overlay");
    
    // Verifica se o elemento foi encontrado
    if (element) {
        element.classList.remove("overlay");
        element.classList.add("out");
    }
}

function abrirModal(){
    let element = document.querySelector(".out");
    if(element){
        element.classList.remove("out");
        element.classList.add("overlay")
    }
}

function adicionarAnotacao(){

    fechaModal();
}