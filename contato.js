window.addEventListener("load", () => {
    const elBtnEnviar = document.getElementById("btnEnviar")
    elBtnEnviar.addEventListener("click", enviar)
})

function enviar() {
    const nome = buscarInputs("#inputName")
    const sobrenome = buscarInputs("#inputSobrenome")
    const email = buscarInputs("#inputEmail")
    const mensagem = buscarInputs("#inputMensagem")

    enviarDados(nome, sobrenome, email, mensagem)

    respostaEnvio()
}

function buscarInputs(input) {
    const valorInput = document.querySelector(input).value

    return valorInput
}

async function enviarDados(valorNome, valorSobrenome, ValorEmail, valorMensagem) {
    const url = `https://target-api-simples.cyclic.app/generica`

    const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nome: valorNome,
            sobrenome: valorSobrenome,
            email: ValorEmail,
            mensagem: valorMensagem
        }) 
    }
    await fetch(url, options)
}

function respostaEnvio() {
    const resposta = document.getElementById("mensagemSucesso")
    resposta.style.display = "block"

    //const elementoContato = document.getElementById("idContato")
    //elementoContato.style.paddingBottom = "0px"
}