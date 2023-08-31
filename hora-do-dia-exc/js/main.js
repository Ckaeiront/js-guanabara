const images = {
  day: 'https://i.pinimg.com/564x/dc/b8/5f/dcb85f36678753d9687bc20d75d967be.jpg',
  afternoon: 'https://i.pinimg.com/564x/95/0c/8d/950c8d250545900b87765fda6f5cc070.jpg',
  night: 'https://i.pinimg.com/564x/65/9b/cb/659bcb840a45ac77caef3b692a582780.jpg'
}

const imageDiv = document.querySelector('.img');
const text = document.querySelector('.hour-text');
const hour = 1;

console.log(hour);

const changeHour = () => {
  if(hour >= 5 && hour <= 12) {
    text.textContent = `São ${hour} horas da manhã.`;
    setImage(images.day);
  } else if(hour > 12 && hour < 19) {
    text.textContent = `São ${hour} horas da tarde.`;
    setImage(images.afternoon);
  } else if (hour > 19 && hour <= 23){
    text.textContent = `São ${hour} horas da noite`;
    setImage(images.night);
  } else {
    text.textContent = `São ${hour === 1 ? hour + ' hora' : hour + ' horas'} da madrugada`;
    setImage(images.night);
  }
}

const setImage = (image) => {
  imageDiv.style.backgroundImage = `url(${image})` || images.night;
}

changeHour();
