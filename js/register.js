const btnLogin = document.querySelector('[data-login]');

function verificarTexto(){
  let text = document.querySelector('[data-name]').value;
  if(isNaN(text) && text.length >= 5){
    return true;
  }else{
    return false;
  }
}
function verificarPassword(){
  let pass = document.querySelector('[data-password]').value;
  if(pass.length >= 6){
    return true;
  }else{
    return false;
  }
}
function verificarRepeatPassword(){
  let pass = document.querySelector('[data-password]').value;
  let repeat = document.querySelector('[data-repeatpassword]').value;
  if(pass == repeat){
    return true;
  }else{
    return false;
  }
}

function validaciones(){
  let msj = 'Corrija los siguientes campos\n';
  let esCorrecto = true;
  if(!verificarTexto()){
    msj += ' - UserName.\n';
    esCorrecto = false;
  }
  if(!verificarPassword()){
    msj += ' - Password.\n';
    esCorrecto = false;
  }
  if(!verificarRepeatPassword()){
    msj += ' - RepeatPassword.\n';
    esCorrecto = false;
  }
  if(!esCorrecto){
    alert(msj)
  }else{
    alert('Registro Exitoso.')
    let name = document.querySelector('[data-name]').value;
    let pass = document.querySelector('[data-password]').value;
    localStorage.setItem('user',name)
    localStorage.setItem('password',pass)
    window.location.href = '/index.html'
  }
}

btnLogin.addEventListener('click',validaciones)