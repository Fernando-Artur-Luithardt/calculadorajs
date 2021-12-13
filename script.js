let n1 = 0
let n2 = 0
let historico = ""
let telaNumBack = 0
let chamouFuncao = 0

//se a função foi chamada
// 0 falso e 1 verdadeiro
let maiss = 0
let menoss = 0
let divi = 0
let multi = 0

render(telaNumBack)

function render(n) {

    const tela = document.querySelector("#tela")

    if (chamouFuncao == 1) {
        telaNumBack = 0
        chamouFuncao = 0
    }

    if (telaNumBack != 0) {
        let hist = tela.innerHTML
        tela.innerHTML = hist + n
        telaNumBack = parseFloat(tela.innerHTML)
    }else(
        tela.innerHTML = n,
        telaNumBack = parseFloat(tela.innerHTML)
        )
}

function mais() {
    maiss = 1
    const tela = document.querySelector("#tela")
    if (n1 == 0) {
        n1 = tela.innerHTML
        telaNumBack = 0   
    } else if(n1 != 0 && n2 == 0){
        n2 = tela.innerHTML
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        historico = n1 + n2
        telaNumBack = historico
        tela.innerHTML = ""
        render(historico)
        n1 = 0
        n2 = 0
        chamouFuncao = 1
        maiss = 0
    }
}

function menos() {
    menoss = 1
    const tela = document.querySelector("#tela")
    if (n1 == 0) {
        n1 = tela.innerHTML
        telaNumBack = 0   
    } else if(n1 != 0 && n2 == 0){
        n2 = tela.innerHTML
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        historico = n1 - n2
        telaNumBack = historico
        tela.innerHTML = ""
        render(historico)
        n1 = 0
        n2 = 0
        chamouFuncao = 1
        menoss = 0
    }
}

function divisao() {
    divi = 1
    const tela = document.querySelector("#tela")
    if (n1 == 0) {
        n1 = tela.innerHTML
        telaNumBack = 0   
    } else if(n1 != 0 && n2 == 0){
        n2 = tela.innerHTML
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        historico = n1 / n2
        telaNumBack = historico
        tela.innerHTML = ""
        render(historico)
        n1 = 0
        n2 = 0
        chamouFuncao = 1
        divi = 0
    }
}

function multiplicacao() {
    multi = 1
    const tela = document.querySelector("#tela")
    if (n1 == 0) {
        n1 = tela.innerHTML
        telaNumBack = 0   
    } else 
    if(n1 != 0 && n2 == 0){
        n2 = tela.innerHTML
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        historico = n1 * n2
        telaNumBack = historico
        tela.innerHTML = ""
        render(historico)
        n1 = 0
        n2 = 0
        chamouFuncao = 1
        multi = 0
    }
}

function limpa() {
    n1 = 0
    n2 = 0
    historico = 0
    chamouFuncao = 1
    render(0)
}

function resultado(){
    if(maiss == 1) {
        mais()
        maiss = 0
    }else if (menoss == 1) {
        menos()
        menoss = 0
    }else if (divi == 1) {
        divisao()
        divi = 0
    }else if (multi == 1) {
        multiplicacao()
        multi = 0
    }
}