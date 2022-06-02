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
  const { name, sprites, species, height, weight, id } = pokemon;
  const pokeInnerHTML = `
    <div class="img-container">
      <img id="pokeimg" src="${sprites.other['official-artwork'].front_default}" alt="${name}" />
      <h3 class="name">${name}</h3>
      <button class="comments">comments</button>
      <button class="reservations">Reservations</button>
  
    </div>
    `;
  pokemonEl.innerHTML = pokeInnerHTML;
  pokeContainer.appendChild(pokemonEl);


  const reserveBtn = document.querySelectorAll('.reservations');
  const pokeReservation = document.querySelector('.poke_reservation');
  //Display reservations pop up with selected item's details
  let createReserve = () => {
    const reserveEl = document.createElement('div');
    reserveEl.classList.add('poke');
    const reserveInnerHTML = `
        <div class="img-container">
          <img id="pokeimg" src="${sprites.other['official-artwork'].front_default}" alt="${name}" />
          <h3 class="name">${name}</h3>
          <ul class="atributes">
            <li>Specie: ${species.name}</li>
            <li>Height: ${height}</li>
            <li>Weight: ${weight}</li>
            <li>ID: ${id}</li>
          </ul>
        </div>
        
        `;
    reserveEl.innerHTML = reserveInnerHTML;
    pokeReservation.appendChild(reserveEl);
    reserveBtn.forEach((element) => {
      element.addEventListener('click', () => {

        console.log('ditto');

      });
    });
  };
  
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
