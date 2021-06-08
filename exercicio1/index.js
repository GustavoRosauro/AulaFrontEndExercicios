let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let button = document.getElementById("button");
button.addEventListener("click",()=>{
    alert(`Nome: ${nome.value} e Idade: ${idade.value}`);
});