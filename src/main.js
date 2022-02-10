import burrito from './burrito.jpg';

const mainLoader = () => {

  let contentContainer = document.querySelector('#content');
  
  const header = document.createElement('h1');
  header.textContent = 'Welcome to Burritopia!';
  header.classList.add('pageHeader');
  contentContainer.appendChild(header);

  const subHeader = document.createElement('h2');
  subHeader.textContent = 'Where Your Dreams Come Wrapped in a Tortilla';
  subHeader.classList.add('subHeader');
  contentContainer.appendChild(subHeader);

  const meme = new Image();
  meme.src = burrito;
  meme.classList.add("image");
  contentContainer.appendChild(meme);

  const mainText = document.createElement('p');
  mainText.textContent = "Here at Burritopia, we don't just provide the most potent examples of classic wrapped bliss known to man, we also explore beyond the known boundaries of burritodom in an existential quest towards the outermost limits of culinary bliss. And then we pass the fruits of our discovery on to you. It's like being served the answers to all of the universe's mysteries inside a delicious flour vessel, with guac and salsa.";
  mainText.classList.add('mainText');
  contentContainer.appendChild(mainText);
  };
  

  export {
    mainLoader,
  };