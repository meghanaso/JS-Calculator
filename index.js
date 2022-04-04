const operation = document.getElementsByClassName("operation")
const display = document.getElementById("display")
const numbers = document.querySelector(".numbers")

const enterValue = value => display.textContent += value;

numbers.addEventListener('click', event => {
  let text = numbers.value;
  display.innerHTML = text;
});

const equalTo = () => (enterValue.textContent) ? enterValue.textContent = eval(enterValue.textContent) : false;