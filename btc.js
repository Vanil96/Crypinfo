
async function Crypto_ind() {
    let apikey="&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816";
    crypto_href= "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,PLN,EUR,GBP"+apikey;
    

    const response = await fetch(crypto_href);
    const data = await response.json();


const price_pln = data.RAW.BTC.PLN.PRICE;
const price_usd = data.RAW.BTC.USD.PRICE;
const price_eur = data.RAW.BTC.EUR.PRICE;
const low = data.RAW.BTC.PLN.LOW24HOUR;
const high = data.RAW.BTC.PLN.HIGH24HOUR;
const change = data.RAW.BTC.PLN.CHANGEPCT24HOUR; 
const kapital = data.RAW.BTC.USD.MKTCAP;   
const wolumen = data.RAW.BTC.USD.VOLUME24HOUR; 

const curr = " BTC"
const pricefor1000 = (1/price_pln)*1000;    // ilość btc za 1000zł


document.getElementById('pricepln_ind').textContent = price_pln.toLocaleString()+" zł";
document.getElementById('priceusd_ind').textContent = price_usd.toLocaleString()+" USD";
document.getElementById('priceeur_ind').textContent = price_eur.toLocaleString()+" EUR";  
document.getElementById('high_ind').textContent = high.toLocaleString()+" zł";; 
document.getElementById('low_ind').textContent = low.toLocaleString()+" zł";; 
document.getElementById('change_ind').textContent = change.toLocaleString()+"%";; 
document.getElementById('kapital_ind').textContent = kapital.toLocaleString()+" $"; 
document.getElementById('wolumen_ind').textContent = wolumen.toLocaleString()+" $"; 
document.getElementById('calc_ind').textContent = pricefor1000.toLocaleString()+curr; 


if (change>0) { document.getElementById('change_ind').setAttribute("style", "color:green;") }
else if(change<0){document.getElementById('change_ind').setAttribute("style", "color:red;");}
else {document.getElementById('change_ind').setAttribute("style", "color:fiolet;");};




}

Crypto_ind();
