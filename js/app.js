    // criando a lista de produtos
    let listaDeProdutos = [];
    // criando o valor total geral (produtos acumulando)
    let totalGeral = 0;
    // zerando o campo de produtos ao iniciar.
    document.getElementById('lista-produtos').innerHTML = '';

function adicionar() {

    //testado e correto
    let produtoSelecionado = document.getElementById('produto').value;

    // Converte a quantidade para número inteiro, garantindo que seja um número válido
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Validação básica (verificar se possui algum valor valido no campo qtdade, antes)
    if (quantidade <= 0 || isNaN(quantidade)) {
        alert('Selecione uma quantidade válida!');
        return; 
    }

    // 1. Usar split() com o separador
    // Aqui usamos " - R$ " como separador.
    let partes = produtoSelecionado.split(' - R$');
    let nomeProduto = partes[0];
    let precoProduto = partes[1];

    //converter as virgulas para . para nao dar problemas:
    let precoUnitario = parseFloat(precoProduto.replace(',', '.'));

    // campo carrinho
    let campoCarrinho = document.getElementById('lista-produtos');

    // campo valor total
    let campoValorTotal = document.getElementById ('valor-total');

    // 4. Calcular o subtotal do item
    let subtotal = precoUnitario * quantidade;
    totalGeral = totalGeral + subtotal;

    // Agora 'totalGeral' contém a soma de todas as adições
    campoValorTotal.innerHTML = totalGeral;

    // Cria o novo item para o carrinho (melhor forma de adicionar HTML)
    campoCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span>
        </section>`;

}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = totalGeral.toFixed(2);
}
