const url = "./assets/scripts/quotes.json";
const quoteButton = document.querySelector('.quotes__button');
const playButton = document.querySelector('.player__button');
const langSwitcher = document.querySelector('.switcher');
const langButtons = langSwitcher.querySelectorAll('.switcher__button');


let lang = "Ru";

const getRandomeQuote = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let randomIndex = Math.floor(Math.random() * data.length);
      const quoteText = document.querySelector('.quotes__text');
      const quoteImage = document.querySelector('.quotes__image');
      const quoteAuthor = document.querySelector('.quotes__author');
      quoteText.innerText = `"${data[randomIndex][`text${lang}`]}"`;
      quoteImage.src = `./assets/img/${data[randomIndex].image}.jpg`;
      quoteImage.alt = `${data[randomIndex][`author${lang}`]}`;
      quoteAuthor.innerText = `${data[randomIndex][`author${lang}`]}`;
    });
}

const audio = new Audio();
let isPlay = false;
const playAudio = () => {
  audio.src = "./assets/audio/kin-dza-dza.mp3";
  isPlay = true;
  audio.currentTime = 0;
  audio.play();
  playButton.classList.add('pause');
}

const pauseAudio = () => {
  isPlay = false;
  playButton.classList.remove('pause');
  audio.pause();
}

const switchLanguage = (e) => {
  if (e.target.classList.contains('switcher__button')) {
    langButtons.forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
    e.target.name === "Ru" ? lang = "Ru" : lang = "En";
  }
}

getRandomeQuote();

quoteButton.addEventListener('click', getRandomeQuote);

playButton.addEventListener('click', () => (isPlay ? pauseAudio() : playAudio()));
langSwitcher.addEventListener('click', switchLanguage);

