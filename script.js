let n = 0
render(0)

function render(n) {
    const tela = document.querySelector("#tela")
    console.log(tela.innerText)
    if (tela.innerHTML != 0) {
        let hist = tela.innerHTML
        tela.innerHTML = hist + n
    }else(tela.innerHTML = n)
}