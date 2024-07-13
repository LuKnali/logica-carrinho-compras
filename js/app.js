let produtos = document.getElementById('produto');
let campoQuantidade = document.getElementById('quantidade');
let listaProdutosCarrinho = document.getElementById('lista-carrinho');
let valorTotal = document.getElementById('valor-total');

function adicionar() {
    let valorProdutoSelecionado = produtos.value;
    let quantidade = campoQuantidade.value;
    let totalProduto = valorProdutoSelecionado * quantidade;

    let produtoSelecionado = produtos[produtos.selectedIndex];
    let nomeProduto = produtoSelecionado.getAttribute('name');

    if(isNaN(quantidade) || quantidade <= 0) {	
        alert(`Houve um erro, insira uma quantidade correta para o produto ${nomeProduto}.`);
        campoQuantidade.value = '';
        return;
    }

    if (listaProdutosCarrinho.textContent == '') {
        listaProdutosCarrinho.innerHTML = listaProdutosCarrinho.innerHTML + `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProdutoSelecionado}</span>`;
    } else {
        listaProdutosCarrinho.innerHTML = listaProdutosCarrinho.innerHTML + '<br>' + `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProdutoSelecionado}</span>`;
    }

    let valorTotalNumero = parseFloat(valorTotal.textContent.replace('R$', '')); 
    valorTotal.textContent = `R$${valorTotalNumero + totalProduto}`;

    campoQuantidade.value = '';
    campoQuantidade.focus();
 
}

function limpar() {
    listaProdutosCarrinho.innerHTML = '';
    valorTotal.textContent = `R$0`;
}