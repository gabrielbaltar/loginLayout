const inputName = document.querySelector(".nome-usuario");
const inputEmail = document.querySelector(".email");
const body = document.querySelector("body");

console.log(inputName);

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
    console.log("click");
}

function retirarBorder() {
    inputEmail.classList.remove("email-border");
    console.log("click");
}

/* Adicionar a interação no input de nome de usuário*/
inputEmail.addEventListener("click", showBorder);
inputEmail.addEventListener("click", retirarBorderName);
inputName.addEventListener("click", retirarBorder);
body.addEventListener("click", retirarBorder);
body.addEventListener("click", retirarBorderName);


