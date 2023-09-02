const imageDiv = document.querySelector(".image-div");
const text = document.querySelector(".display-text");
const birthYear = document.querySelector("#age");
const masculino = document.querySelector("#masculino");
const feminino = document.querySelector("#feminino");
const getResult = document.querySelector(".get-result");

const year = new Date().getFullYear();

const people = {
  women: [
    "https://i.pinimg.com/564x/4c/9e/bd/4c9ebdc1d1cb8bf0d7620d1ad22e37f5.jpg",
    "https://i.pinimg.com/564x/91/10/7d/91107d4d1c1d94724162d890e67e0ce7.jpg",
    "https://i.pinimg.com/564x/8b/8b/3c/8b8b3cedb454cddd4ba73c884b663409.jpg",
    "https://i.pinimg.com/564x/88/49/5c/88495c60cd3318ced0ff25c815127a56.jpg",
  ],
  men: [
    "https://i.pinimg.com/564x/82/ad/c2/82adc21ce9fd23046d03b8a68d99df42.jpg",
    "https://i.pinimg.com/564x/32/b1/82/32b182483bbc3b1425adbeab336b70ed.jpg",
    "https://i.pinimg.com/564x/fd/1d/5b/fd1d5bdb9eb1f207073f614be842a889.jpg",
    "https://i.pinimg.com/564x/4b/c7/26/4bc7266b7e8349530e20d393491ce3af.jpg",
  ],
};

const eventHandler = function () {
  if (!masculino.checked && !feminino.checked)
    return alert("check at least one of the options");
  if (!birthYear.value || birthYear.value >= year)
    return alert("Erro. Digite um ano válido");
  const age = year - birthYear.value;
  getGenreAndAge(age);
};

const ageCheck = () => {
  getResult.addEventListener("click", eventHandler);
  window.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.keyCode === 13) eventHandler();
  });
};

const getGenreAndAge = (age) => {
  if (masculino.checked && feminino.checked)
    return alert("select only one genre");
  let num = 0;
  if (age > 13 && age < 23) {
    num = 1;
  } else if (age >= 23 && age < 40) {
    num = 2;
  } else if (age >= 40) {
    num = 3;
  } else {
    num = num;
  }
  if (masculino.checked) {
    setImageAndText(people.men[num], age, "homem");
  } else {
    setImageAndText(people.women[num], age, "mulher");
  }
};

const setImageAndText = (image, age, genre) => {
  imageDiv.style.backgroundImage = `url(${image})`;
  text.textContent = `Detectamos ${genre} de ${age} anos.`;
};

ageCheck();
