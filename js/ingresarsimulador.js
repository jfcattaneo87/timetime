
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");



loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  loginErrorMsg.style.visibility = 'hidden'
  
    if (validateEmail(email)) {
      location.reload();
      window.location.href = "plataforma.html";
    } else {
      loginErrorMsg.style.visibility='visible'
    }
})

const validateEmail = (email) => {
    const rightEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validated = rightEmail.test(email);
    return validated;
}

