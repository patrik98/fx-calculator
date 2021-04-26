document.querySelectorAll('select').forEach(element => {
    element.innerHTML = 
    `
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
    <option value="CHF">CHF</option>
    <option value="SEK">SEK</option>
    <option value="BTC">BTC</option>
    `
});

// const fixerUri = 'https://data.fixer.io/api/latest?base=EUR&symbols=USD,SEK,CHF&access_key=API_KEY';
const fixerUri = 'fixer.json';

async function convert(inputValue, inputCurrency, outputCurrency) {
    const response = await fetch(fixerUri);
    const data = await response.json();
    const rates = data['rates'];
    rates['EUR'] = 1.;
    return inputValue / rates[inputCurrency] * rates[outputCurrency];
}

function round(value, decimals) {
    return (Math.round(value * 100) / 100).toFixed(decimals);
}