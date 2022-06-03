import './style.css';
import Logo from './img/images.png';
import { printPokemons } from './module/homepage.js';
import { showComment } from './module/comment.js';

const headLogo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = Logo;
headLogo.appendChild(myLogo);

const popUp = async ()=> {
  await printPokemons();
  const commetBtn = document.querySelectorAll('.comments');
  commetBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      showComment(e);
    });
  });
};

printPokemons();
popUp();