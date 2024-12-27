'use strict';
// #перемиканя картинок в Waves# //
import photo1 from '../images/Photo.png';
import photo2 from '../images/Photo2.png';
import photo3 from '../images/Photo3.svg';

const image = [photo1, photo2, photo3];

const headerWaves = document.querySelector('.header__waves');
const prevButton = document.querySelector('.waves__button1');
const newtButton = document.querySelector('.waves__button2');

let currentImageIndex = 0;

function updateWavesImage() {
  headerWaves.style.backgroundImage = `url(${image[currentImageIndex]})`;
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
