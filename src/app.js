let prato = null;
let pratoPreco = null;
let bebida = null;
let bebidaPreco = null;
let sobremesa = null;
let sobremesaPreco = null;

let contadorProdutos = 0;

function selecionarPrato(div, descricao, preco) {
  desmarcarProduto('prato');

  // marca
  div.classList.add("selecionado");
  prato = descricao;
  pratoPreco = preco;
  contadorProdutos = contadorProdutos + 1;

  liberarFechamento();
}

function selecionarBebida(div, descricao, preco) {
  desmarcarProduto('bebida');

  // marca
  div.classList.add("selecionado");
  bebida = descricao;
  bebidaPreco = preco;
  contadorProdutos = contadorProdutos + 1;

  liberarFechamento();
}

function selecionarSobremesa(div, descricao, preco) {
  desmarcarProduto('sobremesa');

  // marca
  div.classList.add("selecionado");
  sobremesa = descricao;
  sobremesaPreco = preco;
  contadorProdutos = contadorProdutos + 1;

  liberarFechamento();
}

function liberarFechamento() {
  const botao = document.querySelector("footer button");
  if (contadorProdutos === 3) {
    botao.disabled = false;
    botao.innerHTML = "Fechar pedido";
    botao.classList.add("liberado");
    botao.style.cursor = "pointer";
  } else {
    botao.disabled = true;
    botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
    botao.classList.remove("liberado");
  }
}

function desmarcarProduto(produto) {
  const produtoSelecionado = document.querySelector(`.${produto} .selecionado`); // "."+bebida+" .selecionado"
  if (produtoSelecionado !== null) {
    produtoSelecionado.classList.remove("selecionado");
    contadorProdutos = contadorProdutos - 1;
  }
}

function fecharPedido() {
  const linkDaMensagem = montaMensagemWhatsApp();
  window.open(linkDaMensagem, '_blank').focus();
}

function revisarPedido() {
  document.querySelector(".confirmacao").classList.remove("escondido");

  document.querySelector(".pratoEscolhido").innerHTML = prato;
  document.querySelector(".pratoEscolhidoPreco").innerHTML = `${pratoPreco.toFixed(2)}`;
  document.querySelector(".bebidaEscolhida").innerHTML = bebida;
  document.querySelector(".bebidaEscolhidaPreco").innerHTML = `${bebidaPreco.toFixed(2)}`;
  document.querySelector(".sobremesaEscolhida").innerHTML = sobremesa;
  document.querySelector(".sobremesaEscolhidaPreco").innerHTML = `${sobremesaPreco.toFixed(2)}`

  document.querySelector(".totalPreco").innerHTML = `R$ ${(pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2)}`
}

function fecharPedido() {
  window.open(montaMensagemWhatsApp(), '_blank').focus();
}

function refazerPedido() {
  document.querySelector(".confirmacao").classList.add("escondido");
}

function montaMensagemWhatsApp() {
  const numero = "5571999925706";
  const total = (pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2);

  let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${total}
  `;

  mensagem = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${mensagem}`;
}