// setando contagem incial
let contagem = 0

// selecionando o valor e os botoes
const valor = document.querySelector("#value")
const botoes = document.querySelectorAll(".btn")

botoes.forEach(function (botao) {
    botao.addEventListener("click", function (e) {
        const estilos = e.currentTarget.classList
        if (estilos.contains("decrease")) {
            contagem--
        } else if (estilos.contains("increase")){
            contagem++
        } else {
            contagem = 0
        }
        valor.textContent = contagem
        if (contagem < 0) {
            valor.style.color = "red"
        }
        if (contagem > 0) {
            valor.style.color = "green"
        }
        if (contagem === 0) {
            valor.style.color = "#222"
        }
    })

})