function validarFormulario() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const erro = document.createElement("p");
    erro.style.color = "red";

    const mensagensErro = document.querySelectorAll(".error-message");
    mensagensErro.forEach((msg) => msg.remove());

    let valid = true;

    if (email !== "user@gmail.com" || senha !== "user123") {
      erro.textContent = "E-mail ou senha incorretos.";
      document.querySelector(".login-form").appendChild(erro);
      valid = false;
    }

    return valid;
  }