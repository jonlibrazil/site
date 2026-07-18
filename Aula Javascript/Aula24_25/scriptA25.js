function setBackgroundColor(color){
    document.body.style.backgroundColor = color;
}


document.getElementById("redButton").addEventListener("click",function(){setBackgroundColor('red');});
document.getElementById("greenButton").addEventListener("click",function(){setBackgroundColor("green");});
document.getElementById("blueButton").addEventListener("click",function(){setBackgroundColor("blue");});

document.getElementById('inputBox').addEventListener('keypress',function(event){
    alert('Tecla pressionada:'+event.key);
});

const resultadoTeclado = document.getElementById('resultadoTeclado');
document.getElementById('inputBox').addEventListener('keypress',function(event){
    resultadoTeclado.innerHTML += '<p>Tecla pressionada: <strong>'+event.key+'</strong></p>';
});


const mensagem = document.getElementById('mensagemPizzaria');

function clientePedido(){
    const clienteSabor = parseInt(document.getElementById("saborPizza").value);

    if (clienteSabor === 1){
        return mensagem.innerHTML = "Sua pizza de Calabresa está sendo preparada!";
    }
    else if (clienteSabor === 2){
        return mensagem.innerHTML = "Sua pizza de Frango está sendo preparada!";
    }
    else if (clienteSabor === 3){
        return mensagem.innerHTML = "Sua pizza de Mussarela está sendo preparada!";
    }
    else {
        return mensagem.innerHTML = "Selecione um sabor!";
    }
    
}