
import { mainLoader } from './main.js';
import { contactLoader } from './contact.js';
import { menuLoader } from './menu.js';
import './style.css';




const buttonFunctions = (function() {   

  let contentContainer = document.querySelector('#content');

  const clearContentContainer = () => {
    while (contentContainer.firstChild) {
      contentContainer.removeChild(contentContainer.lastChild);
    }
  };

  const homeButton = document.querySelector('#home');
  homeButton.addEventListener('click', (e) => {
    clearContentContainer();
    mainLoader();
  });
  
  const menuButton = document.querySelector('#menu');
  menuButton.addEventListener('click', (e) => {
    clearContentContainer();
    menuLoader();
  });

  const contactButton = document.querySelector('#contact');
  contactButton.addEventListener('click', (e) => {
    clearContentContainer();
    contactLoader();
  });

})();

mainLoader();

