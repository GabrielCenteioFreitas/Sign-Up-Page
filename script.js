function togglePasswordVisibiliy() {
    var input = document.getElementById("password");
    var toggle_icon_show = document.getElementById("password-toggle-icon-show");
    var toggle_icon_hide = document.getElementById("password-toggle-icon-hide");
    var toggle_text = document.getElementById("password-toggle-text");
    if (input.type === "password") {
      input.type = "text";
      toggle_icon_show.style.display = "none";
      toggle_icon_hide.style.display = "block";
      toggle_text.textContent = "Ocultar";
    } else {
      input.type = "password";
      toggle_icon_show.style.display = "block";
      toggle_icon_hide.style.display = "none";
      toggle_text.textContent = "Mostrar";
    }
  }

function validarFormulario() {
  var name = document.getElementById("name").value;
  var name_error_preencha = document.getElementById("name-error-preencha");
  var email = document.getElementById("email").value;
  var email_error_preencha = document.getElementById("email-error-preencha");
  var email_error_invalid = document.getElementById("email-error-@");
  var password = document.getElementById("password").value;
  var password_error_preencha = document.getElementById("password-error-preencha");
  var password_requirements = document.getElementById("password-requirements");
  var name_div = document.getElementById("name-div");
  var email_div = document.getElementById("email-div");
  var password_div = document.getElementById("password-div");

  var return_false = 0

  if (name === "") {
    name_error_preencha.style.display = "block";
    name_div.style.marginBottom = `${4-(name_error_preencha.clientHeight)/10}rem`;
    return_false += 1;
  }else {
    name_error_preencha.style.display = "none";
    name_div.style.marginBottom = "4rem";
  }
  
  if (email === "") {
    email_error_preencha.style.display = "block";
    email_div.style.marginBottom = `${4-(email_error_preencha.clientHeight)/10}rem`;
    return_false += 1;
  }else if (!/@/.test(email)) {
    email_error_invalid.textContent = `Inclua um "@" no endereço de e-mail. "${email}" está com um "@" faltando`;
    email_error_invalid.style.display = "block";
    email_error_preencha.style.display = "none";
    email_div.style.marginBottom = `${4-(email_error_invalid.clientHeight)/10}rem`;
    return_false += 1;
  }else {
    email_error_preencha.style.display = "none";   
    email_error_invalid.style.display = "none"; 
    email_div.style.marginBottom = "4rem";
  }

  if (password === "") {
    password_error_preencha.style.display = "block";
    password_requirements.style.color = "#666666";
    password_requirements.style.fontWeight = "400";
    password_div.style.marginBottom = `${4-(password_error_preencha.clientHeight)/10}rem`;
    return_false += 1;
  }else if (password.length<6) {
    password_error_preencha.style.display = "none";
    password_requirements.style.color = "red";
    password_requirements.style.fontWeight = "500";
    password_div.style.marginBottom = "4rem";
    return_false += 1;
  }else {
    password_error_preencha.style.display = "none";
    password_requirements.style.display = "block";
    password_requirements.style.color = "#666666";
    password_requirements.style.fontWeight = "400";
    password_div.style.marginBottom = "4rem";
  }

  if (return_false > 0) {
    return false
  }else {
    document.getElementById("forms").submit()
    return true;
  }
}