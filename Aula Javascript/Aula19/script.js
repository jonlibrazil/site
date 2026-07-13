function trocaCor()
{
    const div1 =  document.getElementById("div-1");
    const div2 =  document.getElementById("div-2");
    const div3 =  document.getElementById("div-3");

    div1.style.backgroundColor = "red";
    div2.style.backgroundColor = "lightGreen";
    div3.style.backgroundColor = "lightBlue";
}

function retornaCor()
{
    const div1 =  document.getElementById("div-1");
    const div2 =  document.getElementById("div-2");
    const div3 =  document.getElementById("div-3");

    div1.style.backgroundColor = "";
    div2.style.backgroundColor = "";
    div3.style.backgroundColor = "";
}

function efetuaOperacao()
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    switch(operador) {

        case "+":
            resultado = num1 + num2;
            break;

        case "-":
            resultado = num1 - num2;
            break;   
            
        case "*":
            resultado = num1 * num2;
            break;
            
        case "/":
            if(num2 == 0)
            {
                resultado = "Divisão por 0 é inválida!"
            }    
            else 
            {
            resultado = num1 / num2;
            break;
            }

        default:
            resultado = "Operador inválido!"     

    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;  
}

function traduzirTexto()
{
    console.log("Olá, se você chegou até aqui, seja bem vindo ao meu portfólio profissional!");
    
    let lista = document.getElementById("idioma");

    console.log(lista.value);

    document.getElementById("textoIdioma").innerHTML = "Idioma selecionado: " + lista.value

    switch (lista.value)
    {
        case "pt":
            funcTraducao = "Olá, sejam bem-vindos!";
            break;

        case "en":
            funcTraducao = "Hello, welcome!";
            break;

        case "es":
            funcTraducao = "Hola, bienvenidos!";
            break;

        case "fr":
            funcTraducao = "Bonjour, bienvenue!";
            break;

        default:
            funcTraducao = "Olá, selecione um idioma!";
    }

    document.getElementById("textoTraducao").innerHTML = funcTraducao;
}