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

