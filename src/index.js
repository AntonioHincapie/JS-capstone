import './style.css';
import Logo from './img/images.png';

const headLogo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = Logo;
headLogo.appendChild(myLogo);

const screen = document.querySelector('.card-container');
const pokemons = ['squirtle', 'sandshrew', 'charmeleon', 'blastoise', 'metapod', 'rattata'];

function displayCards(data) {
  const imgUrl = data.sprites.other['official-artwork'].front_default;
  const { name } = data;
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<img id="poke-card" src=${imgUrl} alt="">
            <div class="name-heart">
            <p class="name">${name}</p>
            <i class="fa-regular fa-heart"></i>
            </div>
            <div class="likes">5 likes</div>
            <button class="comments">comments</button>
            <button  class="reservations">Reservations</button>`;
  screen.appendChild(card);
}

function displayname(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCards(data);
    })
    .catch((err) => {
      console.log('Pokemon not found', err);
    });
}

pokemons.forEach((name) => {
  displayname(name);
});