const elements = {
  inputEmail: document.querySelector(`#input-email`),
  formRecuperacaoDeSenha: document.querySelector(`#formRecuperacaoDeSenha`)
}

const showEmailError = (msg) => {
  elements.emailError.textContent = msg
}

const showError = (msg, elementId) => {
  document.getElementById(elementId).textContent = msg
}

elements.formRecuperacaoDeSenha.addEventListener(`submit`, (event) => {
  let emailLength = elements.inputEmail.value.length
  let emailValor = elements.inputEmail.value

  showError(``, `email-error`)

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(emailValor)) {
        emailValor = true;
    } else {
        emailValor = false;
    }
    if (emailValor === false) {
        showError(`Por favor, insira um endereco de e-mail valido.`, `email-error`);
        event.preventDefault();
    }
    
    if(!emailLength){
        showError(`Campo obrigatorio`,`email-error`)
    }

})