const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;


if(name ===""||email === ""||message ===""){
    alert("Todos os campos são obrigatórios!");
    return false;
}

if(name.length < 3||name.length > 50){
    alert("O nome deve ter entre 3 e 500 caracteres!");
    return false;
}

     

