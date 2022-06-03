import createPokemonCard from '../index.js';

const commentPopup = document.getElementById('commentPopup');

const createPopup = (pokemon) => {
  const pokeUp = document.createElement('div');
  pokeUp.classList.add('popup');
  const {
    name, sprites, types, abilities, moves,
  } = pokemon;
  const pokeUpinnerHTML = `
  <div class="popup-container">
      <span id="closePopup">&#x274c;</span>
      <img id="pokeimg" src="${sprites.other['official-artwork'].front_default}" alt="${name}"/>
      <div class"pokemonInfo">
        <h3 class="name">${name}</h3>
        <div class="pokemon-description">
          <div class="type">
            <h4 class="title">Type</h4>
            <p>${types[0].type.name}</p>
          </div>
          <div class="abilities">
            <h4 class="title">Abilities</h4>
            <ul>
              <li>${abilities[0].ability.name}</li>
              <li>${abilities[1].ability.name}</li>
            </ul>
          </div>
          <div class="moves">
            <h4 class="title">Moves</h4>
            <ul>
              <li>${moves[0].move.name}</li>
              <li>${moves[1].move.name}</li>
              <li>${moves[2].move.name}</li>
              <li>${moves[3].move.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
  pokeUp.innerHTML = pokeUpinnerHTML;
  commentPopup.appendChild(pokeUp);
};

const catchPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPopup(pokemon);
};

const displayPopup = async () => {
  createPokemonCard();
  const commentBtn = document.getElementById('comments');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      catchPokemon(e);
    });
  });
};

displayPopup();

export default catchPokemon;