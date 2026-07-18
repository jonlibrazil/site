const carros = ["Uno","Fusca","Gol","Celta"];

const conteudo = document.getElementById("conteudo");

var dados;
var i;

function criaSecao(titulo,dadosF)
{
    let secao = document.createElement("div");
    secao.innerHTML = "<h2>"+titulo+"</h2>"+dadosF;
    conteudo.appendChild(secao);
}



dados = "";
i = 0;
while(i < 4)
{
    dados += "<p>"+carros[i]+"</p>";
    i++;
}

criaSecao("Loop while",dados);



dados = "";
i = 0;
while(i < carros.length)
{
    dados += "<p>"+carros[i]+"</p>";
    i++;
}

criaSecao("Loop while melhorado",dados );



dados = ""
i = 0;
do{
    dados += "<p>"+carros[i]+"</p>";
    i++;
}while(i < carros.length)
criaSecao("Loop while invertido",dados );



dados = "";
for(i = 0; i < carros.length; i++)
{
    dados += "<p>"+carros[i]+"</p>";
} 
criaSecao("Loop For",dados);



dados = "";
for(let carro of carros)
{
    if(carro == "Gol")
        continue;
    dados += "<p>"+carro+"</p>";
}
criaSecao("Loop For Of",dados);



let carro1 = {marca: "ford", modelo: "ka", ano: "2015"};
let carro2 = {marca: "fiat", modelo: "uno", ano: "2005"};

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);
console.log(carros2);


dados = "";
for(let carro of carros2)
{
    let propriedades = "";

    for(let prop in carro)
    {
        propriedades += carro[prop]+" | ";
    }

    dados += "<p>"+propriedades+"</p>";
}
criaSecao("Loop For In",dados);



dados = "";
carros2.forEach((carro) => 
{
    dados += "<p>"+carro.marca+" | "+carro.modelo+" | "+carro.ano+"</p>";
})

criaSecao("Loop Foreach",dados);


const listaCarros = ["Uno", "Fusca", "Gol", "Celta","Palio","Gurgel"];
let indice = 0;
let conteudoCarro = document.getElementById("conteudoCarro");
const btnAvancar = document.getElementById("btnAvancar");
const btnCancelar = document.getElementById("btnCancelar");

function mostrarCarroAtual() 
{
    conteudoCarro.innerHTML += "<p>Carro atual:"+listaCarros[indice]+"</p>";
}

mostrarCarroAtual();

function proximoCarro()
{
    indice++;

    if (indice ===1)
    {
    btnCancelar.style.display = "inline-block";
    }

    if (indice < listaCarros.length)
    {
    mostrarCarroAtual();
    }
    else
    {
    conteudoCarro.innerHTML = "<p>Fim da lista de carros!</p>";
    // btnAvancar.disabled = true;
    btnCancelar.style.display = "none";
    indice = 0
    }
}

function cancelarOperacao()
{
    conteudoCarro.innerHTML = "<p>Operação cancelada pelo usuário.</p>";
    indice = 0;
    btnAvancar.disabled = false;
    mostrarCarroAtual();
    btnCancelar.style.display = "none";
}