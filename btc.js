let apikey="&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816";
href= "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,PLN"+apikey;

async function Crypto_ind() {
    const response = await fetch(href);
    const data = await response.json();

const price_pln = data.RAW.BTC.PLN.PRICE;
const price_usd = data.RAW.BTC.USD.PRICE;
const low = data.RAW.BTC.PLN.LOW24HOUR;
const high = data.RAW.BTC.PLN.HIGH24HOUR;
const change = data.RAW.BTC.PLN.CHANGEPCT24HOUR; 
const kapital = data.RAW.BTC.USD.MKTCAP;   
const wolumen = data.RAW.BTC.USD.VOLUME24HOUR; 

//document.getElementById('kapitalizacja').textContent= kapitalizacja.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }); //Język niemiecki oddziela części dziesiętne przecinkiem, a tysiące kropką

document.getElementById('pricepln_ind').textContent = price_pln.toLocaleString()+" zł";
document.getElementById('priceusd_ind').textContent = price_usd.toLocaleString()+" $"; 
document.getElementById('high_ind').textContent = high.toLocaleString()+" zł";; 
document.getElementById('low_ind').textContent = low.toLocaleString()+" zł";; 
document.getElementById('change_ind').textContent = change.toLocaleString()+" %";; 
document.getElementById('kapital_ind').textContent = kapital.toLocaleString()+" $"; 
document.getElementById('wolumen_ind').textContent = wolumen.toLocaleString()+" $"; 

}

Crypto_ind();
