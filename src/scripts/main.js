'use strict';
const image = ['../images/Photo.png', '../images/Photo2.png'];

const headerWaves = document.querySelector('.header__waves');
const prevButton = document.querySelector('.waves__button1');
const newtButton = document.querySelector('.waves__button2');

let currentImageIndex = 0;

function updateWavesImage() {
  headerWaves.style.backroundImage = `url(${image[currentImageIndex]})`;
}

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + image.length) % image.length;
  updateWavesImage();
});

newtButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % image.length;
  updateWavesImage();
});

updateWavesImage();
