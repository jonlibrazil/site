const celulas = document.querySelectorAll('.celula');

let vezDoX = true;

document.getElementById("botaoReiniciar").addEventListener('click',iniciarJogo);

function iniciarJogo(){
    celulas.forEach(celula =>{
        celula.textContent = "";
        celula.addEventListener('click',tratarClique,{once:true})
    })
}

function tratarClique(evento){
    evento.target.textContent = vezDoX ? "X" : "O";
    vezDoX = !vezDoX;
} 

iniciarJogo();





const campoTarefa = document.getElementById('campoTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

function adicionarTarefa(){
    const textoTarefa = campoTarefa.value;
    if (textoTarefa === ""){
        alert('Por favor, digite uma tarefa antes de adicionar!');
        return;
    }
    const novaLinha = document.createElement('li');
    novaLinha.textContent = textoTarefa;
    listaTarefas.appendChild(novaLinha);
    campoTarefa.value = "";
    campoTarefa.focus();
}

btnAdicionar.addEventListener('click',adicionarTarefa);