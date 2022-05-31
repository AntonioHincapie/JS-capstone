import './style.css';
import Logo from './img/images.png';

const headLogo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = Logo;
headLogo.appendChild(myLogo);