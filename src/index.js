import './style.css';
import Logo from './img/images.png';

const headLogo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = Logo;
headLogo.appendChild(myLogo);

const pokeContainer = document.getElementById('poke_container');
const pokemonsNumber = 9;

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const { name, sprites } = pokemon;
  const pokeInnerHTML = `
    <div class="img-container">
      <img id="pokeimg" src="${sprites.other['official-artwork'].front_default}" alt="${name}" />
      <h3 class="name">${name}</h3>
      <button id="comments">comments</button>
      <button class="reservations">Reservations</button>
  
    </div>
    `;
  pokemonEl.innerHTML = pokeInnerHTML;
  pokeContainer.appendChild(pokemonEl);
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonsNumber; i += 1) {
    getPokemon(i);
  }
};

fetchPokemons();

export default createPokemonCard;