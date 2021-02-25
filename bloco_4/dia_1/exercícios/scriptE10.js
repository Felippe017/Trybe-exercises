let custoProduto = 500;
let valorVenda = 0;
const custoImposto = 20;
const valorCustoTotal = custoProduto + custoImposto;
const lucro = (valorVenda * 1000) - valorCustoTotal;

if (custoProduto == 0 || valorVenda == 0) {
  console.log("Erro de validação");
}
else {
  console.log(lucro);
}

