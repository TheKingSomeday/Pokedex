/* 
* Quando clicar no pokémon da listagem, temos que escolher o cartão do pokemon
aberto e mostrar o cartão correspondente ao que foi selecionado pelo usuario.

para isso vamos trabalhar com dois elementos.
1 - listagem 
2 - cartão do pokemon
*/

// precisamos criar 2 variaveis no JS para trabalhar com o elementos da tela.
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

// vamos trabalhar com um evento de clique, feito pelo usuario na listagem de pokemons.
listaSelecaoPokemons.forEach(pokemon => {
pokemon.addEventListener('click', () => {

  //remover a class aberto só do cartão que está aberto  
  const cartaoPokemonAberto = document.querySelector(".aberto")
  cartaoPokemonAberto.classList.remove("aberto")

  //ao clicar em um pokemon da listagem, pegamos o desse pokemon para saber pokemon mostrar
    
    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add("aberto")

    //remover a class ativo que marca o pokemon selecionado
    const pokemonAtivoNaListagem = document.querySelector(".ativo")
    pokemonAtivoNaListagem.classList.remove("ativo")

    //adicionar a class ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add("ativo")
  })
})