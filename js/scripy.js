const inputName = document.querySelector(".nome-usuario");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".senha");
const buttonCreateAccount = document.querySelector(".button-create-account");
const body = document.querySelector("body");

console.log(buttonCreateAccount);

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

/* Adicionar envento de mouseouver botão*/

function ChangeButtonColor(event){
    buttonCreateAccount.classList.add("button-create-account-hover");
    event.stopPropagation();
    console.log("Passou");
}

function removeMouseFromButton(){
    buttonCreateAccount.classList.remove("button-create-account-hover");
}

buttonCreateAccount.addEventListener("mouseout", removeMouseFromButton)
buttonCreateAccount.addEventListener("mouseover", ChangeButtonColor);


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


