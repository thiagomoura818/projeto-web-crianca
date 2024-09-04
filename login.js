let usuario = document.querySelector('#cadastro-usuario')
let senha = document.querySelector('#cadastro-senha')

function cadastrar(){

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
        {
            userCad: usuario.value,
            senhaCad: senha.value,
        }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    
}

function entrar(){
    let usuario = document.querySelector('#login-usuario')
    
    let senha = document.querySelector('#login-senha')
    
    let listaUser = []
    
    let userValid = {
      usuario: '',
      senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
      if(usuario.value == item.userCad && senha.value == item.senhaCad){
  
          userValid = {
              usuario: item.userCad,
              senha: item.senhaCad
          }
  
      }
  })
  
  if(usuario.value == userValid.usuario && senha.value == userValid.senha){
      alert('Deu certo')
  } else{
      alert('Deu errado')
  }
  }