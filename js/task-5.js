function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let backgroundColorBtn = document.querySelector('.change-color');
let backgroundColorText = document.querySelector('.color');
let body = document.querySelector('body');
backgroundColorBtn.addEventListener('click', (e) => {
    let color = getRandomHexColor();
    backgroundColorText.innerText = color;
    backgroundColorText.style.color = color;
    body.style.backgroundColor = color;
});