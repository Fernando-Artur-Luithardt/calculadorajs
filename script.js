let n = 0
let n1 = 0
let n2 = 0
let n3 = ""
let telaNum = 0
let chamou = 0

//se a função foi chamada
// 0 falso e 1 verdadeiro
let maiss = 0
let menoss = 0
let divi = 0

render(telaNum)

function render(n) {

    const tela = document.querySelector("#tela")

    if (chamou == 1) {
        telaNum = 0
        chamou = 0
    }

    if (telaNum != 0) {
        let hist = tela.innerHTML
        tela.innerHTML = hist + n
        telaNum = parseFloat(tela.innerHTML)
    }else(
        tela.innerHTML = n,
        telaNum = parseFloat(tela.innerHTML)    
        )
}

function mais() {
    //console.log(n3 + 'n3')
    maiss = 1
    const tela = document.querySelector("#tela")
    if (n1 == 0) {
        n1 = tela.innerHTML
        telaNum = 0   
    } else if(n1 != 0 && n2 == 0){
        n2 = tela.innerHTML
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        n3 = n1 + n2
        telaNum = n3
        tela.innerHTML = ""
        render(n3)
        n1 = 0
        n2 = 0
        chamou = 1
        maiss = 0
    }
}

function menos() {
    //console.log(n3 + 'n3')
    menoss = 1
    const tela = document.querySelector("#tela")
    if (n1 == 0) {
        n1 = tela.innerHTML
        telaNum = 0   
    } else if(n1 != 0 && n2 == 0){
        n2 = tela.innerHTML
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        n3 = n1 - n2
        telaNum = n3
        tela.innerHTML = ""
        render(n3)
        n1 = 0
        n2 = 0
        chamou = 1
        menoss = 0
    }
}

function divisao() {
    //console.log(n3 + 'n3')
    divi = 1
    const tela = document.querySelector("#tela")
    if (n1 == 0) {
        n1 = tela.innerHTML
        telaNum = 0   
    } else if(n1 != 0 && n2 == 0){
        n2 = tela.innerHTML
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        n3 = n1 / n2
        telaNum = n3
        tela.innerHTML = ""
        render(n3)
        n1 = 0
        n2 = 0
        chamou = 1
        divi = 0
    }
}

function limpa() {
    n1 = 0
    n2 = 0
    n3 = 0
    chamou = 1
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
    }
}