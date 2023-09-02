const start = document.querySelector("#start");
const end = document.querySelector("#end");
const steps = document.querySelector("#steps");
const getResult = document.querySelector(".get-result");
const textResult = document.querySelector(".text-result");

const counter = () => {
  getResult.addEventListener("click", appHandler);
  window.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) appHandler();
  });
};

const appHandler = () => {
  if (textResult.textContent.length > 0) textResult.textContent = "";
  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    steps.value.length == 0
  )
    return alert("please, type anything...");
  else {
    let inpti = Number(start.value);
    let inpte = Number(end.value);
    let inpts = Number(steps.value);

    for (let i = inpti; i <= inpte; i += inpts) {
      textResult.textContent += `👉 ${i}`;
    }
    textResult.textContent += "🏁";
  }
};

counter();
