const url = "quotes.json";
const quoteText = document.querySelector('.quotes__text');
const quoteButton = document.querySelector('.quotes__button');

const getData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      quoteText.innerText = data[Math.floor(Math.random() * data.length)].text;
    });
}
getData();

console.log(quoteButton)

quoteButton.addEventListener('click', getData);

