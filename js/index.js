const btnLogin = document.querySelector('[data-login]');

function verificar(){
    let user = localStorage.getItem('user');
    let nombre = document.querySelector('[data-name]').value
    let pass = localStorage.getItem('password');
    let clave = document.querySelector('[data-password]').value;
    (nombre == '' || clave == '')?alert('Falta completar'):(user == nombre && pass == clave)? window.location.href = './page/home.htm':alert('No esta registrado. \nPor favor, registrese.')
}

btnLogin.addEventListener('click',verificar)