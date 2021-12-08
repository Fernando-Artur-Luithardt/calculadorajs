let n = 0
let n1 = 0
let n2 = 0
let telaNum = 0

//se a função foi chamada
// 0 falso e 1 verdadeiro
let maiss = 0

render(telaNum)

function render(n) {

    const tela = document.querySelector("#tela")

    if (n1 != 0) {
        tela.innerHTML = 0
    }

    if (tela.innerHTML != 0) {
        let hist = tela.innerHTML
        tela.innerHTML = hist + n
    }else(tela.innerHTML = n)
}

function mais() {
    maiss = 1
    const tela = document.querySelector("#tela")
    if(n1 == 0) {
        n1 = tela.innerHTML   
    } else if(n1 != 0 && n2 == 0){
        n2 = tela.innerHTML
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        n1 = n1 + n2
        render(n1)
        n1 = 0
        n2 = 0
    }
}

function resultado(){
    if(maiss = 1) {
        mais()
        maiss = 0
    }
}