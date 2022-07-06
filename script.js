import { pokemonArray } from './data/pokemon.js';

console.log(pokemonArray);

const cardContainer = document.querySelector('.card-container');
const input = document.querySelector('#input');
const searchButton = document.querySelector('#search-button');
const noOfPokemons = document.querySelector('#pokemons');

const checkContents = (pokemon, index) => {
    if (pokemon.types.length == 1) {
        return `<p class="card__text">${pokemon.name} (#${index}) is a ${pokemon.types[0]} type pokemon.</p>`
    }
    else {
        return `<p class="card__text">${pokemon.name} (#${index}) is a ${pokemon.types[0]} and ${pokemon.types[1]} type pokemon.</p>`
    }
}

const displayCard = (pokemon, index) => {
    return cardContainer.innerHTML += `
    <div class="card"> 
    <img src=${pokemon.sprite} class="card__image">
    <div class="card__content">
        <h1 class="card__heading">${pokemon.name}</h1>
        ${checkContents(pokemon, index+1)}
    </div>
    </div>`
}

const search = (event) => {
    cardContainer.innerHTML = "";
    console.log(input.value)
    const filteredPokemon = pokemonArray.filter((pokemon) => {
        //name filter
        if (input.value.toLowerCase() == pokemon.name) {
            return pokemon;
        }
        //tag filter
        if (input.value.toLowerCase() == pokemon.types[0] || input.value.toLowerCase() == pokemon.types[1] ) {
                return pokemon;
        }
    })
    filteredPokemon.forEach((pokemon, index) => {
        displayCard(pokemon, index);
    })
}

const changeNoOfPokemons = (event) => {
    console.log(event.target.value);
    cardContainer.innerHTML = "";
    const newList = pokemonArray.slice(0, parseInt(event.target.value));
    newList.forEach((pokemon, index) => {
        displayCard(pokemon, index);
    })
}

const displayAllCards = () => {
    pokemonArray.forEach((pokemon, index) => {
        displayCard(pokemon, index);
    })
}

searchButton.addEventListener("click", search);
noOfPokemons.addEventListener("change", changeNoOfPokemons);

displayAllCards();