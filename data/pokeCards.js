import { pokemon } from '../data/pokemon.js'

class Pokemon {
  constructor(id) {
    this.id = id
  }
}

const mainContainer = document.querySelector('.container')

  function createPokeCard(pokeData) {
      let card = document.createElement('div')
      card.className = 'box'
      let figure = document.createElement('figure')
      let caption = document.createElement('figcatpion')
      let image = document.createElement('img')

      // let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
      caption.textContent = pokeData.name
      if(pokeData.id !== 0) {
        image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
      } else {
        image.src = `../images/pokeball.png`
      }
      image.src = pokeData.sprites.front_shiny
      figure.appendChild(caption)
      card.appendChild(figure)
      mainContainer.appendChild(card)
  }

  // pokemon.forEach((singleMon) => {
  //   fetch(singleMon.url)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(myJson) {
  //     console.log(myJson)
  //     // createPokeCard(myJson);
  //   });
  // })

  function fetchSinglePokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(retreivedPokemon) {
      console.log(retreivedPokemon.id.length)
      if(retreivedPokemon.id < 10) {
        retreivedPokemon.imageID = "00" + retreivedPokemon.id
      }
      if(retreivedPokemon.id > 9 && retreivedPokemon.id < 100) {
        retreivedPokemon.imageID = "0" + retreivedPokemon.id
      }
      if(retreivedPokemon.id > 99) {
        retreivedPokemon.imageID = retreivedPokemon.id
      }
      retreivedPokemon.name = retreivedPokemon.name.charAt(0).toUpperCase() + retreivedPokemon.name.slice(1)
      createPokeCard(retreivedPokemon)
    })
  }

const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function(){
  let pokemonID = prompt('Enter an ID of an existing Pokemon')
  fetchSinglePokemon(pokemonID)
})