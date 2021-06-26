export default function initFetchBitCoin() {}

const array = [];
console.log(array.from);
console.log(Array.from);

async function fetchBCoin(url) {
  const price = document.querySelector('.btc-price');
  const response = await fetch(url);
  const json = await response.json();

  const brlBC = 100 / json.BRL.buy;
  price.innerText = brlBC.toFixed(5);
}

fetchBCoin('https://blockchain.info/ticker');