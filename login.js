document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.querySelector('.form-action');
    const formLogin = document.getElementById('login-form');

    if (formCadastro) {
        formCadastro.addEventListener('submit', cadastrar);
    } else {
        console.error('Formulário de cadastro não encontrado');
    }

    if (formLogin) {
        formLogin.addEventListener('submit', entrar);
    } else {
        console.error('Formulário de login não encontrado');
    }
});

function cadastrar(event) {
    event.preventDefault();
    
    let usuario = document.querySelector('#cadastro-usuario');
    let senha = document.querySelector('#cadastro-senha');
    
    if (!usuario.value || !senha.value) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    const userExists = listaUser.some(item => item.userCad === usuario.value);
    if (userExists) {
        alert('Usuário já cadastrado.');
        return;
    }

    listaUser.push({
        userCad: usuario.value,
        senhaCad: senha.value,
    });
    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    window.location.href = "./login.html";
}

function entrar(event) {
    event.preventDefault();
    
    alert("teste");
    let usuario = document.querySelector('#login-usuario');
    let senha = document.querySelector('#login-senha');
    
    if (!usuario.value || !senha.value) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
    
    const userValid = listaUser.find(item => item.userCad === usuario.value && item.senhaCad === senha.value);
    
    if (userValid) {
        alert('Login bem-sucedido! Bem-vindo, ' + usuario.value);
        // Redirecionar ou realizar alguma ação pós-login aqui
    } else {
        alert('Usuário ou senha inválidos.');
    }
}
