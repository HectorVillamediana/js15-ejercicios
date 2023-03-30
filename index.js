//1
let nombre = "Hector";
let edad = 30;
let ciudad = "Madrid";

localStorage.setItem("nombre", nombre)
localStorage.setItem("edad", edad)
localStorage.setItem("ciudad", ciudad)
//2
let counter = 5;
let buttonCount = document.createElement("button")
document.body.appendChild(buttonCount).innerText = "Push Me"
buttonCount.addEventListener("click", () => {
	counter++
	buttonCount.innerText = counter
	localStorage.setItem("counter", counter)
})

JSON.stringify
window.addEventListener("load", () => {
	const pName = document.createElement("p")
	const pAge = document.createElement("p")
	const pCity = document.createElement("p")
	const pCounter = document.createElement("p")
	document.body.appendChild(pName).innerText = localStorage.getItem("nombre")
	document.body.appendChild(pAge).innerText = localStorage.getItem("edad")
	document.body.appendChild(pCity).innerText = localStorage.getItem("ciudad")
	document.body.appendChild(pCounter).innerText = localStorage.getItem("counter")
})

//3
const buttonCount_1 = document.createElement("button")
const spanCounter = document.createElement("span")
document.body.appendChild(spanCounter)
document.body.appendChild(buttonCount_1).innerText = "Button 1"
buttonCount_1.addEventListener("click", () => {
	counter++
	spanCounter.innerText = localStorage.getItem("counter")
})

//4
const pokemons = [
	{ id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
	{ id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
	{ id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
	{ id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
	{ id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
	{ id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
	{ id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
	{ id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
	{ id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
	{ id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
	{ id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
	{ id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
	{ id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
	{ id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
	{ id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
	{ id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
	{ id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
	{ id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
	{ id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
	{ id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]
let divPokemons = document.createElement("div")
document.body.appendChild(divPokemons)
divPokemons.style.display = "flex"
divPokemons.style.gap = "20px"
pokemons.forEach(poke => {
	const divPokemon = document.createElement("div")
	const pokeId = document.createElement("span")
	pokeId.innerText = poke.id
	const pokeName = document.createElement("h2")
	pokeName.innerText = poke.name
	const pokeImg = document.createElement("img")
	pokeImg.src = poke.img
	const buttonBuy = document.createElement("button")
	buttonBuy.innerText = "Comprar"
	divPokemons.appendChild(divPokemon)
	divPokemon.appendChild(pokeId)
	divPokemon.appendChild(pokeName)
	divPokemon.appendChild(pokeImg)
	divPokemon.appendChild(buttonBuy)
	buttonBuy.addEventListener("click", () => {
		localStorage.setItem("pokemon", JSON.stringify(poke))
	})
})