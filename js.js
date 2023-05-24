let tela = document.querySelector("#tela")

 // inserindo o numero na tela com parametro
function numeroNaTela(num) {
    let numero = document.querySelector('#tela').innerHTML;
    document.querySelector('#tela').innerHTML = numero + num
}

function reset() {
    location.reload()
}

function calcular() {
    var resultado = document.querySelector('#tela').innerHTML;
    if(resultado){ 
        // calculando com o eval (comp codigo js representado com)
        document.querySelector('#tela').innerHTML = eval(resultado)
    } else {
        reset()
    }
}