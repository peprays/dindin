document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('investForm').addEventListener('submit', calcularInvestimento);
});

function pegarValorPorId(id) {
    return parseFloat(document.getElementById(id).value);
}

function calcularInvestimento(event) {
    event.preventDefault(); // Impede a atualização da página

    const inicio = pegarValorPorId('inicial');
    const mensal = pegarValorPorId('mensal');
    const anos = parseInt(document.getElementById('anos').value);
    const periodo = anos * 12;
    const bi = 1.0200;

    const vf = inicio * Math.pow(bi, periodo) + mensal * (Math.pow(bi, periodo) - 1) / 0.0200;

    document.getElementById('resultado').innerText = `R$ ${vf.toFixed(2)}`;
}
