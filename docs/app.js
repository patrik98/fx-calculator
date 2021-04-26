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
const fixerUri = "fixer.json";