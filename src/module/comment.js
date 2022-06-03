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

const printComments = async () => {
  const comment = [{
    "comment": "Hello",
    "creation_date": "2022-06-03",
    "username": "Antonio",
  },
  {
    "comment": "Bye",
    "creation_date": "2022-06-03",
    "username": "Antonio",
  }];
  const container = document.getElementById('allcomment');
  container.innerHTML = null;
  comment.forEach((cmt) => {
    const name = cmt.username;
    const date = cmt.creation_date;
    const comentario = cmt.comment;
    container.insertAdjacentHTML('afterbegin' ,`
    <p class="comment"><strong>${date}</strong> ${name}: ${comentario}</p>
    `);
  })
};

const showComment = async (e) => {
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
      <div class="pokemonInfo">
        <h3 class="name">${name[0].toUpperCase() + name.slice(1)}</h3>
        <div class="pokemon-description">
          <div class="type">
            <h4 class="title">Type</h4>
            <ul>
              <li>${type[0].toUpperCase() + type.slice(1)}</li>
            </ul>
          </div>
          <div class="abilities">
            <h4 class="title">Abilities</h4>
            <ul>
              <li>${abilityOne[0].toUpperCase() + abilityOne.slice(1)}</li>
              <li>${abilityTwo[0].toUpperCase() + abilityTwo.slice(1)}</li>
            </ul>
          </div>
          <div class="moves">
            <h4 class="title">Moves</h4>
            <ul>
              <li>${moveOne[0].toUpperCase() + moveOne.slice(1)}</li>
              <li>${moveTwo[0].toUpperCase() + moveTwo.slice(1)}</li>
              <li>${moveThree[0].toUpperCase() + moveThree.slice(1)}</li>
              <li>${moveFour[0].toUpperCase() + moveFour.slice(1)}</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="comment">
        <h3 class="title">Comments</h3>
        <div id="allcomment"></div>
      </div>
    </div>
  `);
  hideComment();
  printComments();
};

export default showComment;