const menuLoader = () => {

  let contentContainer = document.querySelector('#content');

  const menuHeader = document.createElement('h1');
  menuHeader.textContent = `And Now For The Exciting Part`;
  menuHeader.classList.add('pageHeader');
  contentContainer.appendChild(menuHeader);

  const burritoHeader = document.createElement('h2');
  burritoHeader.textContent = `BURRITOS. Duh.`;
  burritoHeader.classList.add('subHeader');
  contentContainer.appendChild(burritoHeader);

  const elClassicoHeader = document.createElement('p');
  elClassicoHeader.textContent = `El Classico`;
  elClassicoHeader.classList.add('itemHeader');
  contentContainer.appendChild(elClassicoHeader);

  const elClassicoInfo = document.createElement('p');
  elClassicoInfo.textContent = `The burrito you know, better than you knew it could be. Rice from the hairs of angels, beans from Jack's beanstalk itself, your choice of protein, cheese, sour cream, and guac at no extra charge. Just like it should be.`
  elClassicoInfo.classList.add('mainText');
  contentContainer.appendChild(elClassicoInfo);

  const theSpicyVeganHeader = document.createElement('p');
  theSpicyVeganHeader.textContent = `The Spicy Vegan`;
  theSpicyVeganHeader.classList.add('itemHeader');
  contentContainer.appendChild(theSpicyVeganHeader);

  const theSpicyVeganInfo = document.createElement('p');
  theSpicyVeganInfo.textContent = `No animals, no shame. Just flavor. Tempeh asada (yeah, it blew our minds too), rice from the richness of the earth, beans from Jack's beanstalk itself, fajita veggies from the garden of your dreams sauteed with spices so exotic your grandma hasn't even heard of them, and guac at no extra charge. Just like it should be.`
  theSpicyVeganInfo.classList.add('mainText');
  contentContainer.appendChild(theSpicyVeganInfo);

  const theCurriedNoodleritoHeader = document.createElement('p');
  theCurriedNoodleritoHeader.textContent = `The Curried Noodlerito`;
  theCurriedNoodleritoHeader.classList.add('itemHeader');
  contentContainer.appendChild(theCurriedNoodleritoHeader);

  const theCurriedNoodleritoInfo = document.createElement('p');
  theCurriedNoodleritoInfo.textContent =  `A mind-expanding, genre-bending journey with flavor through space and time. Thick, luxurious udon noodles curried in Massaman, Green, or Yellow thai-style curries, along with your choice of protein, sizzling shishito peppers, shiitake mushrooms, and sauteed dino kale. We know none of this stuff traditionally belongs together, but we invite you on this journey into the unknown. WARNING: you may never come back.`
  theCurriedNoodleritoInfo.classList.add('mainText');
  contentContainer.appendChild(theCurriedNoodleritoInfo);

  const proteinsHeader = document.createElement('h2');
  proteinsHeader.textContent = `PROTEINS. Oh Yeah!`;
  proteinsHeader.classList.add('subHeader');
  contentContainer.appendChild(proteinsHeader);

  const alPastorHeader = document.createElement('p');
  alPastorHeader.textContent = `Al Pastor`;
  alPastorHeader.classList.add('itemHeader');
  contentContainer.appendChild(alPastorHeader);

  const alPastorInfo = document.createElement('p');
  alPastorInfo.textContent = `This stuff will take you to Mexico City faster than any known form of human travel.`
  alPastorInfo.classList.add('mainText');
  contentContainer.appendChild(alPastorInfo);

  const tempehAsadaHeader = document.createElement('p');
  tempehAsadaHeader.textContent = `Tempeh Asada`;
  tempehAsadaHeader.classList.add('itemHeader');
  contentContainer.appendChild(tempehAsadaHeader);

  const tempehAsadaInfo = document.createElement('p');
  tempehAsadaInfo.textContent =  `Like carne asada, but without the carne. No meat, no guilt, no worries.`
  tempehAsadaInfo.classList.add('mainText');
  contentContainer.appendChild(tempehAsadaInfo);

  const grilledShrimpHeader = document.createElement('p');
  grilledShrimpHeader.textContent = `Grilled Shrimp`;
  grilledShrimpHeader.classList.add('itemHeader');
  contentContainer.appendChild(grilledShrimpHeader);

  const grilledShrimpInfo = document.createElement('p');
  grilledShrimpInfo.textContent = `A delectable bounty of the sea, grilled with garlic and lime. So fresh that if you don't already know how to swim, after this, you will.`
  grilledShrimpInfo.classList.add('mainText');
  contentContainer.appendChild(grilledShrimpInfo);

  const drinksHeader = document.createElement('h2');
  drinksHeader.textContent = `DRINKS. For Drinking.`;
  drinksHeader.classList.add('subHeader');
  contentContainer.appendChild(drinksHeader);

  const byobHeader = document.createElement('p');
  byobHeader.textContent = 'BYOB';
  byobHeader.classList.add('itemHeader');
  contentContainer.appendChild(byobHeader);

  const byobInfo = document.createElement('p');
  byobInfo.textContent = `Beers. Wine. Tequila. Whatever you want. Just bring an extra for us.`
  byobInfo.classList.add('mainText');
  contentContainer.appendChild(byobInfo);
};

export {
  menuLoader,
}