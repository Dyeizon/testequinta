var botao = document.querySelector("button")
var estaDark = false

botao.addEventListener("click", ativarDark)


function ativarDark() {
    var body = document.querySelector("body")

    if(estaDark) {
        body.classList.remove("dark")
        botao.innerText = "Ativar Dark"
        estaDark = false
    } else {
        body.classList.add("dark")
        botao.innerText = "Remover Dark"
        estaDark = true
    }
}