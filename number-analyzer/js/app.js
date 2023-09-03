const number = document.querySelector("#inum");
const addBtn = document.querySelector(".add");
const list = document.querySelector("#list");
const getResult = document.querySelector(".get-result");
const displayResult = document.querySelector(".display-result");
const clear = document.querySelector('.clear');

const numArray = [];

// add a number to the list and an array. array.length, max, min, sum and medium;

const addHandler = () => {
  let num = Number(number.value);
  if (!num || num == 0) return alert("Please, type a number");
  if (num > 100) return alert("Error, number must be between 1 and 200");
  numArray.push(num);
  list.innerHTML += `<option>Valor ${num} adicionado</option>`;
  number.value = "";
  displayResult.textContent = "";
};

const resultHandler = () => {
  if (numArray.length == 0) return alert("Please, type a number");
  const length = numArray.length;
  let max = numArray[0],
    min = numArray[0];
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    max = numArray[i] > max ? numArray[i] : max;
    min = numArray[i] < min ? numArray[i] : min;
  }
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  let medium = sum / length;
  displayText(length, max, min, sum, medium);
};

const displayText = (length, max, min, sum, medium) => {
  displayResult.textContent = `Ao todo, temos ${length} elementos\n\no maior numero é ${max}, o menor é ${min}\n\na soma dos valores é ${sum}\n\na média é ${medium}`;
};

const clearHandler = () => {
  for (let i = 0; i < numArray.length; i++) {
    numArray.shift();
  }
  list.innerHTML = "";
  displayResult.textContent = '';
};

const app = () => {
  addBtn.addEventListener("click", addHandler);
  getResult.addEventListener("click", resultHandler);
  clear.addEventListener('click', clearHandler);
};

app();
