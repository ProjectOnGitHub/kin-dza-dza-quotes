const url = "./assets/scripts/quotes.json";
const quoteButton = document.querySelector('.quotes__button');

const getRandomeQuote = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let randomIndex = Math.floor(Math.random() * data.length);
      const quoteText = document.querySelector('.quotes__text');
      const quoteImage = document.querySelector('.quotes__image');
      const quoteAuthor = document.querySelector('.quotes__author');
      quoteText.innerText = `"${data[randomIndex].text}"`;
      quoteImage.src = `./assets/img/${data[randomIndex].image}.jpg`;
      quoteImage.alt = data[randomIndex].author;
      quoteAuthor.innerText = data[randomIndex].author;
    });
}

getRandomeQuote();

quoteButton.addEventListener('click', getRandomeQuote);

