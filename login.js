// login.js

// Função para registrar um novo usuário
function cadastrar(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let usuario = document.querySelector('#cadastro-usuario');
    let senha = document.querySelector('#cadastro-senha');

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push({
        userCad: usuario.value,
        senhaCad: senha.value,
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    window.location.href = 'login.html';
}

// Função para realizar o login
function entrar(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let usuario = document.querySelector('#login-usuario');
    let senha = document.querySelector('#login-senha');

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    const userValid = listaUser.find(item => item.userCad === usuario.value && item.senhaCad === senha.value);

    if (userValid) {
        alert('Login bem-sucedido!');
        window.location.href = 'home.html';
    } else {
        alert('Usuário ou senha inválidos.');
    }
}

// Adiciona os event listeners para o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('login-form');
    if (formLogin) formLogin.addEventListener('submit', entrar);

    const formRegister = document.getElementById('register-form');
    if (formRegister) formRegister.addEventListener('submit', cadastrar);
});
