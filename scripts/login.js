const elements ={
     loginEmail: document.querySelector(`#input-email`),
     senha: document.querySelector(`#input-senha`),
     formLogin: document.querySelector(`#form-login`)
}

const showEmailError = (msg) =>{
    elements.emailError.textContent = msg
}

const showSenhaError = (msg) => {
    elements.senhaErro.textContent = msg
}

const showError = (msg,elementId) =>{
    document.getElementById(elementId).textContent = msg
}

elements.formLogin.addEventListener(`submit`, (event)=>{
    let emailLength = elements.loginEmail.value.length
    let senhaLength = elements.senha.value.length
    let emailValor = elements.loginEmail.value

    showError(``,`email-error`)
    showError(``, `senha-error`)
    
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
    if(!senhaLength){
        showError(`Campo obrigatorio`,`senha-error`)
        event.preventDefault();
    }
    
    
})