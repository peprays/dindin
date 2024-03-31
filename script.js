function logar(){
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if (senha === "1234" && nome === "usuario") {
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function cadastro(){
    window.location.href = "cadastro.html";
}
function Ftp(){
    window.location.href = "ftp.html";
}
function login(){
    window.location.href = "login.html";
}

window.onload = function() {
    var saldoElement = document.getElementById("saldo");
    saldoElement.style.visibility = "hidden";
};

function toggleBalance() {
    var saldoElement = document.getElementById("saldo");
    var toggleButton = document.getElementById("toggleBalance");

    if (saldoElement.style.visibility === "hidden") {
        saldoElement.style.visibility = "visible";
        toggleButton.textContent = "Esconder Saldo";
    } else {
        saldoElement.style.visibility = "hidden";
        toggleButton.textContent = "Mostrar Saldo";
    }
}
