var cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
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

/*function Ftp(){
    window.location.href = "ftp.html"
}*/

function login(){
    window.location.href = "login.html";
}



var saldoRevelado = true; // Variável para controlar se o saldo foi revelado ou não

function toggleBalance() {
    var saldoElement = document.getElementById("saldo");
    //var toggleButton = document.getElementById("toggleBalance");

    if (!saldoRevelado) {
        // Se o saldo ainda não foi revelado, revela-o
        saldoElement.textContent = "R$1.000.000.000,00"; // Substitua pelo saldo real do usuário
        saldoRevelado = true;
    } else {
        // Se o saldo já foi revelado, oculta-o novamente
        saldoElement.textContent = "**********";
        saldoRevelado = false;
    }
}

function enviar(){
    var cpf = document.getElementById("cpf").value;
    if(!cpfRegex.test(cpf)){
        alert("CPF INVALIDO!");
    }
    else{
        alert("CADASTRO REALIZADO COM SUCESSO!");
    }
}


     


