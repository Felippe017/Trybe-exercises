function lucro(custoProduto, valorVenda){
  const custoImposto = 20;
  const valorCustoTotal = custoProduto + custoImposto;
  const lucro = (valorVenda * 1000) - valorCustoTotal;
  if (custoProduto == 0 || valorVenda == 0) {
    console.log("Erro de validação");
  }
  else {
    console.log(lucro);
  }
}

lucro(500, 20);
