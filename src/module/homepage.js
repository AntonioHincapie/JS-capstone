/* eslint-disable no-await-in-loop */
import { getLike, getLikes } from './display-likes.js';
const pokeContainer = document.getElementById('poke_container');
const pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';
let pokemons = [];

const convertData = async (API) => {
  const store = await fetch(API);
  const data = store.json();
  return data;
};

const pokemonInfo = async () => {
  const data = await convertData(pokeList);
  pokemons = data.results;
  for (let i = 0; i < pokemons.length; i += 1) {
    const pokeUrl = pokemons[i].url;
    const pokeDetail = await convertData(pokeUrl);
    pokemons[i].id = pokeDetail.id;
    pokemons[i].img = pokeDetail.sprites.other.home.front_default;
  }
  return pokemons;
};

const printPokemons = async () => {
  const likes = await getLikes();
  const pokemons = await pokemonInfo();
  pokeContainer.innerHTML = '';
  for (let i = 0; i < pokemons.length; i += 1) {
    pokeContainer.innerHTML += `
    <div class="container">
      <img id="pokeimg" src="${pokemons[i].img}" alt="${pokemons[i].name}"/>
      <h3 class="name">${pokemons[i].name[0].toUpperCase() + pokemons[i].name.slice(1)}</h3><div class="name-heart">
      <p>${element.name}</p>
      <i class="${element.name} fa-regular fa-heart"></i>
      </div>
      <div class="likes ${element.name}-likes" data-charlike="${element.name}">${getLike(element.name, likes)} likes</div>
      <button class="comments" id="${pokemons[i].id}">Comments</button>
      <button class="reservations" id="${pokemons[i].id}">Reservations</button>
    </div>`;
  }
};

export default printPokemons;