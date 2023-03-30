

const addPokemonToCart = function () {
    let poke = JSON.parse(localStorage.getItem("pokemon"))
    const divPokemons = document.createElement("div")
    document.body.appendChild(divPokemons)
    divPokemons.style.display = "flex"
    divPokemons.style.gap = "20px"
    const divPokemon = document.createElement("div")
    const pokeId = document.createElement("span")
    pokeId.innerText = poke.id
    const pokeName = document.createElement("h2")
    pokeName.innerText = poke.name
    const pokeImg = document.createElement("img")
    pokeImg.src = poke.img
    const buttonBuy = document.createElement("button")
    buttonBuy.innerText = "Eliminar"
    divPokemons.appendChild(divPokemon)
    divPokemon.appendChild(pokeId)
    divPokemon.appendChild(pokeName)
    divPokemon.appendChild(pokeImg)
    divPokemon.appendChild(buttonBuy)
    return poke
}
addPokemonToCart()
