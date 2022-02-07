const url = "./assets/scripts/quotes.json";
const quoteButton = document.querySelector('.quotes__button');

const getRandomeQuote = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let randomIndex = Math.floor(Math.random() * data.length);
      const quoteText = document.querySelector('.quotes__text');
      quoteText.innerText = data[randomIndex].text;
    });
}

getRandomeQuote();

quoteButton.addEventListener('click', getRandomeQuote);

