var transacoes = [
    {data: '07/05/2024', valor: 500, tipo:'Crédito', descricao:'Dinheiro'},
    {data: '07/05/2024', valor: 550, tipo:'Débito', descricao:'Dinheiro do programa'},
    {data: '07/05/2024', valor: 5000, tipo:'PIX', descricao:'Dinheiro para o programa'},
];
function preencherDadosArray()
{
    var idGrid = document.getElementById('gridPrincipal');
    transacoes.forEach(
    function(transacao)
    {
        var DivDataTransacao = document.createElement('div');
        DivDataTransacao.classList.add('grid-item');
        DivDataTransacao.textContent = transacao.data;
        idGrid.appendChild(DivDataTransacao);

        var DivValor= document.createElement('div');
        DivValor.classList.add('grid-item');
        DivValor.textContent = transacao.valor;
        idGrid.appendChild(DivValor);

       
        var DivTipoTransacao = document.createElement('div');
        DivTipoTransacao.classList.add('grid-item');
        DivTipoTransacao.textContent = transacao.tipo;
        idGrid.appendChild(DivTipoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = transacao.descricao
        idGrid.appendChild(DivDescricaoTransacao);
    }
    );
}

preencherDadosArray();