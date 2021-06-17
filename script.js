const Pass = '123456';
const User = 'tryber@teste.com';

function loginVerify() {
  if (User === document.getElementById('Login').value && Pass === document.getElementById('Senha').value) {
    alert('Olá, Tryber!');
  } else {
    alert('Login e/ou senha inválidos.');
  }
}

function checkMark() {
  console.log(document.getElementById('agreement').value,'test')
}

document.getElementById('logar').addEventListener('click', loginVerify);
document.getElementById('submit-btn').addEventListener('click', checkMark);