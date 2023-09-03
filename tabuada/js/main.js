const numberInput = document.querySelector('#number');
const result = document.querySelector('#display-result');
const generateBtn = document.querySelector('.btn-generate');
const clearBtn = document.querySelector('.clear-btn')

const app = function() {
  generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (numberInput.value === '') return alert('Type a number first.');
    tabuadaGenerator(Number(numberInput.value));
  });
  clearBtn.addEventListener('click', () => {
    if (!result.value) return;
    result.value = '';
  });
}

const tabuadaGenerator = function(number) {
  console.log(typeof number);
  result.value = '';
  for (let i = 0; i <= 10; i++) {
    result.value += `${number} x ${i} = ${number * i}\n`;
  }
}

app();
