
const nbp_api = "http://api.nbp.pl/api/exchangerates/tables/A/?format=json";

async function waluty_fiat() {
  
    
    
  const response = await fetch(nbp_api);
  const data = await response.json();
 
 
//przypisanie wartosci .json do zmiennych
  const eur_price = data[0].rates[7].mid;  
  const usd_price = data[0].rates[1].mid;
  const chf_price = data[0].rates[9].mid;
  const gbp_price = data[0].rates[10].mid;

  localStorage.setItem('data1', gbp_price);





// skraca liczbe do dwoch miejsc po przecinku
  function zaokraglanie(n, k)  
  {
      var factor = Math.pow(10, k);
      return Math.round(n*factor)/factor;

  }
  
  const eur_cut = (zaokraglanie(eur_price, 2));    
  const usd_cut = (zaokraglanie(usd_price, 2));    
  const chf_cut = (zaokraglanie(chf_price, 2));    
  const gbp_cut = (zaokraglanie(gbp_price, 2));    




//wysylanie do htmla

document.getElementById('eur').textContent = eur_cut;
document.getElementById('usd').textContent = usd_cut;
document.getElementById('chf').textContent = chf_cut;
document.getElementById('gbp').textContent = gbp_cut;



}

waluty_fiat();



