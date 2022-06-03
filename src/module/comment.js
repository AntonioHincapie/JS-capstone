const convertData = async () => {
  const pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';
  const datos = await fetch(pokeList);
  return datos.json();
};

const getId = async (id) => {
  const datos = await convertData();
  const dataId = datos.results[id - 1].url;
  const pokeId = await fetch(dataId);
  return pokeId.json();
};

const hideComment = () => {
  const commentPopup = document.getElementById('commentPopup');
  const closePopup = document.getElementById('closePopup');
  closePopup.addEventListener('click', () => {
    commentPopup.style.display = 'none';
  });
};

export const showComment = async (e) => {
  const commentPopup = document.getElementById('commentPopup');
  const pokemons = await getId(e.target.id);
  const { name } = pokemons;
  const img = pokemons.sprites.other.home.front_default;
  const type = pokemons.types[0].type.name;
  const { abilities } = pokemons;
  const abilityOne = abilities[0].ability.name;
  const abilityTwo = abilities[1].ability.name;
  const { moves } = pokemons;
  const moveOne = moves[0].move.name;
  const moveTwo = moves[1].move.name;
  const moveThree = moves[2].move.name;
  const moveFour = moves[3].move.name;
  commentPopup.innerHTML = null;
  commentPopup.insertAdjacentHTML('afterbegin', `
  <div class="popup-container">
      <span id="closePopup">&#x274c;</span>
      <img id="pokeimg" src="${img}" alt="${name}"/>
      <div class"pokemonInfo">
        <h3 class="name">${name}</h3>
        <div class="pokemon-description">
          <div class="type">
            <h4 class="title">Type</h4>
            <p>${type}</p>
          </div>
          <div class="abilities">
            <h4 class="title">Abilities</h4>
            <ul>
              <li>${abilityOne}</li>
              <li>${abilityTwo}</li>
            </ul>
          </div>
          <div class="moves">
            <h4 class="title">Moves</h4>
            <ul>
              <li>${moveOne}</li>
              <li>${moveTwo}</li>
              <li>${moveThree}</li>
              <li>${moveFour}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `);
  hideComment();
};
