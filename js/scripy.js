const inputName = document.querySelector(".nome-usuario");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".senha");
const body = document.querySelector("body");

console.log(inputPassword);

/* Adicionar a interação ao input de Nome de usuário*/
function showBorderName(event){
    inputName.classList.add("email-border");
    event.stopPropagation();
}

function retirarBorderName(){
    inputName.classList.remove("email-border");
}

inputName.addEventListener("click", showBorderName);


/* Adicionar a interação ao input de email*/
function showBorder(event) {
    inputEmail.classList.add("email-border");
    event.stopPropagation();
}

function retirarBorder() {
    inputEmail.classList.remove("email-border");
}

/* Adicionar a interação ao input de senha*/
function showBorderPassword(event){
    inputPassword.classList.add("senha-border");
    event.stopPropagation();
}

function retirarBorderPassword() {
    inputPassword.classList.remove("senha-border");
}

/* Adicionar a interação no input de nome de usuário*/
inputName.addEventListener("click", retirarBorder);
inputName.addEventListener("click", retirarBorderPassword);
inputEmail.addEventListener("click", showBorder);
inputEmail.addEventListener("click", retirarBorderName);
inputEmail.addEventListener("click", retirarBorderPassword);
inputPassword.addEventListener("click", showBorderPassword);
inputPassword.addEventListener("click", retirarBorderName);
inputPassword.addEventListener("click", retirarBorder);
body.addEventListener("click", retirarBorder);
body.addEventListener("click", retirarBorderName);
body.addEventListener("click", retirarBorderPassword);


