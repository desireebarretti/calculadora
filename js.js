let tela = document.querySelector("#tela")

 // inserindo o numero na tela com parametro
function numeroNaTela(num) {
    let numero = document.querySelector('#tela').innerHTML;
    document.querySelector('#tela').innerHTML = numero + num
}

function reset() {
    location.reload()
}