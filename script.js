let n = 0
let n1 = 0
let n2 = 0
render(0)

function render(n) {

    const tela = document.querySelector("#tela")

    if (n1 != 0) {
        tela.innerHTML = ""
    }

    if (tela.innerHTML != 0) {
        let hist = tela.innerHTML
        tela.innerHTML = hist + n
    }else(tela.innerHTML = n)
}

function mais() {
    const tela = document.querySelector("#tela")
    if(n1 == 0) {
        n1 = tela.innerHTML
    } else if(n1 != 0){
        n2 = tela.innerHTML
    } else if (n1 != 0 && n2 != 0) {
        n1 = n1 + n2
        render(n1)
        n1 = 0
        n2 = 0
    }
}