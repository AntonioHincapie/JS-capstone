// Display reservations pop up with selected item's details

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

const hideReservation = () => {
  const reservationPopup = document.getElementById('poke_reservation');
  const closePopup = document.getElementById('closePopup');
  closePopup.addEventListener('click', () => {
    reservationPopup.style.display = 'none';
    window.location.reload();
  });
};

// Display reservations for a given item on the Reservations pop - up

const printReservations = async () => {
  const reservation = [{
    username: 'Francisco',
    date_start: '2022-05-30',
    date_finish: '2022-06-01',
  },
  {
    username: 'Javier',
    date_start: '2022-06-02',
    date_finish: '2022-06-03',
  }];
  const containerReservations = document.getElementById('allreservations');
  containerReservations.innerHTML = null;
  reservation.forEach((reservation) => {
    const username = reservation.username;
    const date_start = reservation.date_start;
    const date_finish = reservation.date_finish;
    containerReservations.insertAdjacentHTML('afterbegin', `
    <p class="reservation">${date_start} - ${date_finish} by: ${username}</p>
    `);
  });
};

const showReservation = async (e) => {
  const reservationPopup = document.getElementById('poke_reservation');
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
  reservationPopup.innerHTML = null;
  reservationPopup.insertAdjacentHTML('afterbegin', `
  <div class="popup-container">
      <span id="closePopup">&#x274c;</span>
      <img id="pokeimg" src="${img}" alt="${name}"/>
      <div class="pokemonInfo">
        <h3 class="name">${name[0].toUpperCase() + name.slice(1)}</h3><br>
        <div class="pokemon-description">
          <div class="type">
            <h4 class="title">Type</h4>
            <ul>
              <li>${type[0].toUpperCase() + type.slice(1)}</li>
            </ul>
            <br>
          </div>
          <div class="abilities">
            <h4 class="title">Abilities</h4>
            <ul>
              <li>${abilityOne[0].toUpperCase() + abilityOne.slice(1)}</li>
              <li>${abilityTwo[0].toUpperCase() + abilityTwo.slice(1)}</li>
            </ul>
            <br>
          </div>
          <div class="moves">
            <h4 class="title">Moves</h4>
            <ul>
              <li>${moveOne[0].toUpperCase() + moveOne.slice(1)}</li>
              <li>${moveTwo[0].toUpperCase() + moveTwo.slice(1)}</li>
              <li>${moveThree[0].toUpperCase() + moveThree.slice(1)}</li>
              <li>${moveFour[0].toUpperCase() + moveFour.slice(1)}</li>
            </ul>
            <br>
          </div>
        </div>
      </div>
      <div id="reservation">
        <h3 class="title">Reservations (2)</h3><br>
        <div id="allreservations"></div>
      </div>
    </div>
  `);
  hideReservation();
  printReservations();
};

export default showReservation;