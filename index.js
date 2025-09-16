function botaoApertado(){
    var nome = document.getElementById("nome").value
    alert("Olá" + nome)
}

var botao = document.getElementById("btn")
botao.addEventListener('click', botaoApertado)