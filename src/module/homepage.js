const pokeContainer = document.getElementById('poke_container');
export const pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';
let pokemons = [];

export const convertData = async (API) => {
  const store = await fetch(API);
  const data = store.json();
  return data;
};

export const pokemonInfo = async () => {
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

export const printPokemons = async () => {
  const pokemons = await pokemonInfo();
  pokeContainer.innerHTML = '';
  for (let i = 0; i < pokemons.length; i += 1) {
    pokeContainer.innerHTML += `
    <div class="img-container">
      <img id="pokeimg" src="${pokemons[i].img}" alt="${pokemons[i].name}"/>
      <h3 class="name">${pokemons[i].name.toUpperCase()}</h3>
      <button class="comments" id="${pokemons[i].id}">comments</button>
      <button class="reservations" id="${pokemons[i].id}">Reservations</button>
    </div>`
  }
};