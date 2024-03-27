const inputName = document.querySelector(".nome-usuario");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".senha");
const buttonCreateAccount = document.querySelector(".button-create-account");
const googleButton = document.querySelector(".google-button");
const facebookButton = document.querySelector(".facebook-button");
const body = document.querySelector("body");

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

function ChangeButtonColor(){
    buttonCreateAccount.classList.add("button-create-account-hover");
}

function removeMouseFromButton(){
    buttonCreateAccount.classList.remove("button-create-account-hover");
}

buttonCreateAccount.addEventListener("mouseout", removeMouseFromButton)
buttonCreateAccount.addEventListener("mouseover", ChangeButtonColor);

/* Adicionar evento mouseover quando passar o mouse em cima do botão do Google */

function googleHoverButton(){
    googleButton.classList.add("google-button-hover");
}

function removeGoogleHoverbutton(){
    googleButton.classList.remove("google-button-hover");
}

googleButton.addEventListener("mouseover", googleHoverButton);
googleButton.addEventListener("mouseout", removeGoogleHoverbutton);


/* Adicionar evento mouseover quando passar o mouse em cima do botão do Facebook */

function facebookHoverButton(){
    facebookButton.classList.add("facebook-button-hover");
}

function removeFacebookHoverButton(){
    facebookButton.classList.remove("facebook-button-hover");
}

facebookButton.addEventListener("mouseover", facebookHoverButton);
facebookButton.addEventListener("mouseout", removeFacebookHoverButton);

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


