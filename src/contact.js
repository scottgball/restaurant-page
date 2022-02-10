
const contactLoader = () => {

  let contentContainer = document.querySelector('#content');

  const contactHeader = document.createElement('h1');
  contactHeader.textContent = 'How to Find Us';
  contactHeader.classList.add('pageHeader');
  contentContainer.appendChild(contactHeader);

  const phoneHeader = document.createElement('h2');
  phoneHeader.textContent = 'By phone:';
  phoneHeader.classList.add('subHeader');
  contentContainer.appendChild(phoneHeader);

  const phoneInfo = document.createElement('p');
  phoneInfo.textContent = '1-800-TORTILLA';
  phoneInfo.classList.add('mainText');
  contentContainer.appendChild(phoneInfo);

  const emailHeader = document.createElement('h2');
  emailHeader.textContent = 'By email:';
  emailHeader.classList.add('subHeader');
  contentContainer.appendChild(emailHeader);

  const emailInfo = document.createElement('p');
  emailInfo.textContent = 'rolloneup@burritopia.com';
  emailInfo.classList.add('mainText');
  contentContainer.appendChild(emailInfo);

  const locationHeader =  document.createElement('h2');
  locationHeader.textContent = 'In person:';
  locationHeader.classList.add('subHeader');
  contentContainer.appendChild(locationHeader);

  const locationInfo = document.createElement('p');
  locationInfo.setAttribute('style', 'white-space: pre;');    
  let locationAddress = `Burritopia
420 Guacamole Street
Burritoville, CA 802170`;
  locationInfo.textContent = locationAddress;
  locationInfo.classList.add('mainText');
  contentContainer.appendChild(locationInfo)
};

export {
  contactLoader,
}