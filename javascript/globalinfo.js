async function globalinfo() { 
const hrf_global = "https://api.coinlore.com/api/global/?json"
const response_global = await fetch(hrf_global);
const glob= await response_global.json();

//wartosci globalne
//let ilosc_coinow = glob[0].coins_count;    
let kapitalizacja = glob[0].total_mcap;  //kapitalizacja rynku
let btc_dominacja = glob[0].btc_d;  //w procentach
let volume = glob[0].total_volume;     // wolumen z 24h

//document.getElementById('ilosc_coinow').textContent= ilosc_coinow;
document.getElementById('kapitalizacja').textContent= kapitalizacja.toLocaleString(); 
document.getElementById('btc_dominacja').textContent = btc_dominacja; 
document.getElementById('volume').textContent= volume.toLocaleString(); 
}

globalinfo();


