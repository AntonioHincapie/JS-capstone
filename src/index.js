import './style.css';
import Logo from './img/pokemonlogo.png';
import printPokemons from './module/homepage.js';
import showComment from './module/comment.js';
import showReservation from './module/reservations.js';
import { addLike, updateLikes } from './module/add-likes.js';

const headLogo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = Logo;
headLogo.appendChild(myLogo);

const popUp = async () => {
  await printPokemons();
  const commetBtn = document.querySelectorAll('.comments');
  commetBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const commentPopup = document.getElementById('commentPopup');
      commentPopup.style.display = 'flex';
      showComment(e);
    });
  });
  const reservationBtn = document.querySelectorAll('.reservations');
  reservationBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const reservationPopup = document.getElementById('poke_reservation');
      reservationPopup.style.display = 'flex';
      showReservation(e);
    });
  });
};

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-heart')) {
    const itemName = event.target.className.split(' ')[0];
    addLike(itemName);
    updateLikes(itemName);
  }
});

printPokemons();
popUp();