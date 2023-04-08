window.addEventListener("load", () => {
    const elBtnSomar = document.getElementById("btn-somar")
    const elBtnBuscar = document.getElementById("btn-buscar")

    elBtnSomar.addEventListener("click", somar)
    elBtnBuscar.addEventListener("click", buscarPokemon)
}) 

function somar() {
    const valorInput01 = buscarInput("input01")
    const valorInput02 = buscarInput("input02")
    const resultadoSoma = somarValores(valorInput01, valorInput02)
    viewResultado(resultadoSoma)

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


async function buscarPokemon() {
    const id = idPokemon("inputId")
    const retornoApi = await buscarNaApi(id)
    exibirPersonagem(retornoApi) 

    console.log(retornoApi)

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
    name.innerHTML = "Nome: " + personagem.name

}