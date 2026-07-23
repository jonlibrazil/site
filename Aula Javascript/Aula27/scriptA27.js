function validateForm(){



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

if(email.length < 5||email.length > 50){
    alert("O e-mail deve ter entre 3 e 50 caracteres!");
    return false;
}

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(email)){
    alert("Por favor, insira um valor de e-mail válido!");
    return false;
}

return true;
}

document.getElementById('contactForm').addEventListener('submit',function(event){
    event.preventDefault();
    if(validateForm()){
        alert("Formulário validado!")
    }
});



function validateForm2() {



const email2 = document.getElementById('email2').value;
const phone = document.getElementById('phone').value;
const password = document.getElementById('password').value;


if(email2 ===""||phone === ""||password ===""){
    alert("Todos os campos são obrigatórios!");
    return false;
}

const emailPattern2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern2.test(email2)){
    alert("Por favor, insira um valor de e-mail válido!");
    return false;
}

const phonepattern = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/;
if (!phonepattern.test(phone)){
    alert("Por favor, insira um valor de telefone válido!");
    return false;
}

const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-{} [\]:;"'<>,.?\/~`|]).{8,}$/;
if (!passwordpattern.test(password)){
    alert("Por favor, insira uma senha forte válida!");
    return false;
}

return true;
}

document.getElementById('formTest').addEventListener('submit',function(event){
    event.preventDefault();
    if(validateForm2()){
        alert("Formulário validado!")
    }
});