import createPokemonCard from '../index.js';

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
};


const catchPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPopup(pokemon);
};

const displayPopup = async () => {
  createPokemonCard();
  reserveBtn.forEach((element) => {
    element.addEventListener('click', () => {
      catchPokemon(e);
      createReserve();
    });
  });
};

displayPopup();