window.addEventListener("load", () => {
    const elBtnSomar = document.getElementById("btn-somar")
    const elBtnBuscar = document.getElementById("btn-buscar")
    const elBtnLimpar = document.getElementById("btn-limpar")

    elBtnSomar.addEventListener("click", somar)
    elBtnBuscar.addEventListener("click", buscarPokemon)
    elBtnLimpar.addEventListener("click", limparInputSoma)
})

function somar() {
    if (validacaoSoma()) {
        const valorInput01 = buscarInput("input01")
        const valorInput02 = buscarInput("input02")
        const resultadoSoma = somarValores(valorInput01, valorInput02)
        viewResultado(resultadoSoma)
    }
}
function validacaoSoma() {
    const input01 = document.getElementById("input01")
    input01.style.border = "solid #CED8E0";
    const valorInput01 = input01.value


    const input02 = document.getElementById("input02")
    input02.style.border = "solid #CED8E0";
    const valorInput02 = input02.value

    if (valorInput01 == "") {
        input01.style.borderColor = "red"

        return false
    }

    if (valorInput02 == "") {
        input02.style.borderColor = "red"

        return false
    }

    return true

}

function buscarInput(input) {
    const valor = Number(document.getElementById(input).value)

    return valor
}
function somarValores(valor01, valor02) {
    const resultado = (valor01 + valor02)

    return resultado
}
function viewResultado(valorSoma) {
    const elementoResul = document.getElementById("conteinerResultado")

    elementoResul.innerHTML = valorSoma
}

function limparInputSoma() {
    document.getElementById("input01").value = ""
    document.getElementById("input02").value = ""
    document.getElementById("conteinerResultado").innerText = "0"

    document.getElementById("input01").style.border = "solid #CED8E0";
    document.getElementById("input02").style.border = "solid #CED8E0";
}






async function buscarPokemon() {
    if (validacaoId()) {
        const id = idPokemon("inputId")
        const retornoApi = await buscarNaApi(id)
        exibirPersonagem(retornoApi)

        console.log(retornoApi)
    }
}

function validacaoId() {
    const id = document.getElementById("inputId")
    id.style.border = "solid #CED8E0";
    const valorId = id.value

    if (valorId == "") {
        id.style.borderColor = "red"

        const imagem = document.getElementById("conteinerImg")
        const name = document.getElementById("conteiner_name")

        imagem.style.display = "none"
        name.style.display = "none"

        return false
    }

    return true
}

function idPokemon(input) {
    const valorId = document.getElementById(input).value

    return valorId
}

async function buscarNaApi(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const response = await fetch(url)

    return await response.json()
}

function exibirPersonagem(personagem) {
    const imagem = document.getElementById("conteinerImg")
    const name = document.getElementById("conteiner_name")

    imagem.src = personagem.sprites.front_default
    imagem.style.display = "block"

    name.innerHTML = "Nome: " + personagem.name
    name.style.display = "block"
}

