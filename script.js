import { pokemonArray } from './data/pokemon.js';

console.log(pokemonArray);

const cardContainer = document.querySelector('.card-container');

const checkContents = (pokemon, index) => {
    if (pokemon.types.length == 1) {
        return `<p class="card__text">${pokemon.name} (#${index}) is a ${pokemon.types[0]} type pokemon.</p>`
    }
    else {
        return `<p class="card__text">${pokemon.name} (#${index}) is a ${pokemon.types[0]} and ${pokemon.types[1]} type pokemon.</p>`
    }
}

pokemonArray.forEach((pokemon, index) => {
    cardContainer.innerHTML += `
    <div class="card"> 
    <img src=${pokemon.sprite} class="card__image">
    <div class="card__content">
        <h1 class="card__heading">${pokemon.name}</h1>
        ${checkContents(pokemon, index+1)}
    </div>
    </div>`
})
