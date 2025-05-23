'use strict'

const headerPrincipal = document.getElementById('header-principal')
const headerFlutuante = document.getElementById('header-flutuante')

const estaVisivel = (elemento) => {

    const posicoes = elemento.getBoundingClientRect()
    const inicio = posicoes.top
    const fim = posicoes.bottom

    let estaVisivel = false
    
    if((fim > 0))
        estaVisivel = true

    return estaVisivel

}

const alterarEstilo = (visibilidadeHeaderPrincipal) => {

    // Se o Header principal estiver visível
    if (visibilidadeHeaderPrincipal) {
        headerFlutuante.classList.remove('header-visivel')
    } else {
        adicionarClasseSeNaoExistir(headerFlutuante, 'header-visivel')
    }
}

const adicionarClasseSeNaoExistir = (elemento, classe) => {
    if (!elemento.classList.contains(classe)) {
        elemento.classList.add(classe)
    }
}

window.addEventListener(('scroll'), () => {
    const headerPrincipalVisibilidade = estaVisivel(headerPrincipal)
    alterarEstilo(headerPrincipalVisibilidade)
})
