import pokemons from "./pokemons.js";

let containerPokemons = document.querySelector('.containerPokemons')

let searchPokemon = document.querySelector('#searchPokemon');
let searchButton = document.querySelector('.searchButton');
let pokemonType = document.querySelector('#pokemonType');


function generator(pokemon){
    containerPokemons.innerHTML =''
    pokemon.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML = `
            <h1 class="pokemon-name">${element.name}</h1>
            <img src=${element.img} alt="" class="pokemon-img">
            <p class="pokemon-type">
                ${element.type}
            </p>
            <p class="pokemon-weight">
                ${element.weight}
            </p>
        `;
        containerPokemons.appendChild(card)
    });
}


function filterPokemons() {
    let filterPokemons = pokemons;

    const searchValue = searchPokemon.value.toLowerCase();
    if (searchValue) {
        filterPokemons = filterPokemons.filter((pokemon) => 
        pokemon.name.toLowerCase().includes(searchValue)
    );
    }
    generator(filterPokemons);
}
const sortSelect = document.getElementById("sortSelect");
const reduceSelect = document.getElementById("reduceSelect");
const typeCountSelect = document.getElementById("typeCountSelect");

sortSelect.addEventListener("change", () => {
  let sorted = [...pokemons];

  switch (sortSelect.value) {
    case "nameAsc":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "nameDesc":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "weightAsc":
      sorted.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
      break;
    case "weightDesc":
      sorted.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
      break;
  }

  generator(sorted);
});




searchButton.addEventListener('click', filterPokemons);
searchPokemon.addEventListener('input', filterPokemons);

generator(pokemons)