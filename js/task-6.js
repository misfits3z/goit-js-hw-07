let input = document.querySelector("input");
let createBtn = document.querySelector('[data-create]');
let destroyBtn = document.querySelector('[data-destroy]');
let boxesArea = document.querySelector('#boxes');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {
  if (amount > 0 && amount <= 100) {
      destroyBoxes();
      let boxDimensions = 30;
      let boxesFragments = new DocumentFragment();
      for (let i = 0; i < amount; i++) {
          let box = document.createElement('div');
          box.style.width = boxDimensions + 'px';
          box.style.height = boxDimensions + 'px';
          box.style.background = getRandomHexColor();
          boxesFragments.appendChild(box);
          boxDimensions += 10;
      }
      boxesArea.appendChild(boxesFragments);
      input.value = '';
  }
}

function destroyBoxes() {
  boxesArea.innerHTML = '';
}

createBtn.addEventListener('click', (e) => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', destroyBoxes);