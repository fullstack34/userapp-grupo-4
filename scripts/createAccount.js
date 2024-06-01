const elements = {
    inputUsername: document.querySelector(`#input-username`),
    inputEmail: document.querySelector(`#input-email`),
    inputSenha: document.querySelector(`#input-senha`),
    inputSenhaConfirma: document.querySelector(`#input-confirmarsenha`),
    formCadastro: document.querySelector(`#form-cadastro`),
  };
  // const showErrorUsernamemsg = document.querySelector(`#usernameError`)
  
  const showErrorUsername = (msg) => {
    elements.userError.textContent = msg;
  };
  
  const showErrorEmail = (msg) => {
    elements.emailError.textContent = msg;
  };
  
  const showErrorSenha = (msg) => {
    elements.senhaError.textContent = msg;
  };
  
  const showErrorSenhaConfirma = (msg) => {
    elements.senhaErrorConfirma.textContent = msg;
  };
  
  const showError = (msg, elementId) => {
    document.getElementById(elementId).textContent = msg;
  };
  
  elements.formCadastro.addEventListener("submit", (event) => {
    let usernameLength = elements.inputUsername.value.length;
    let emailLength = elements.inputEmail.value.length;
    let senhaLength = elements.inputSenha.value;
    let senhaConfirmLength = elements.inputSenhaConfirma.value;
    let emailValor = elements.inputEmail.value;
    
    showError(``, `user-error`);
    showError(``, `email-error`);
    showError(``, `senha-error`);
    showError(``, `senhaConfirm-error`);
  
    if (!usernameLength) {
      showError(`campo obrigatorio`, `user-error`);
      event.preventDefault();
    }
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
  
    if (!emailLength) {
      showError(`campo obrigatorio`, `email-error`);
    }
    if (senhaLength !== senhaConfirmLength) {
      showError(`As senhas não coincidem.`, `senha-error`);
      showError(`As senhas não coincidem.`, `senhaConfirm-error`);

      event.preventDefault();

    }
    if (!senhaLength) {
      showError("campo obrigatorio", `senha-error`);
    }
    if (!senhaConfirmLength) {
      showError(`campo obrigatorio`, `senhaConfirm-error`);
    }
    console.log(senhaLength)
    console.log(senhaConfirmLength)
    
  });
  