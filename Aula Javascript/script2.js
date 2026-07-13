function calcularPreco()
{
    let precoProduto = document.getElementById("precoproduto").valueAsNumber;
    let porcentagem = document.getElementById("porcentagem").valueAsNumber;

    if (isNaN(precoProduto) || isNaN(porcentagem)) {
        document.getElementById("resultado").innerHTML = "Erro: Preencha todos os campos!";
    }


    else if (precoProduto < 0 || porcentagem < 0) {
        document.getElementById("resultado").innerHTML = "Erro: Valores negativos não são permitidos!";
    } 

    else {
    let valorDesconto = precoProduto * (porcentagem / 100);
    let precoFinal = precoProduto - valorDesconto;
    

    console.log(precoProduto,valorDesconto,precoFinal);
    document.getElementById("resultado").innerHTML = "Preço final: R$" + precoFinal;

    alert("Valor desconto " + valorDesconto + ", preço final: " + precoFinal);
    }

}
// calcularPreco();