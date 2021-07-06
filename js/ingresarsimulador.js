let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});


const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "demo" && password === "password") {
        
        location.reload();
        window.location.href="plataforma.html"
    } else {
       
        loginErrorMsg.style.opacity = 1;
    }
})
