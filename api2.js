




// #F8F9FB  -bg light kolor

const hrf_priceall = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XMR,LTC,DASH,BTG,LSK,KZC,BCH,ZEC,DCR,BNB&tsyms=USD,PLN";
const hrf_ticker = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LSK,BTG,LTC,DASH,XMR,KZC,BCH,ZEC,DCR,BNB&tsyms=PLN";

async function prices() {


  const response = await fetch(hrf_ticker);
  const data = await response.json();
  //console.log(JSON.stringify(data));





//BTC

document.getElementById('BTCpln').textContent = data.BTC.PLN;
//document.getElementById('BTCusd').textContent = data.BTC.USD;
//document.getElementById('BTCeur').textContent = data.BTC.EUR;



//ETH
document.getElementById('ETHpln').textContent = data.ETH.PLN;
//document.getElementById('ETHusd').textContent = data.ETH.USD;
//document.getElementById('ETHeur').textContent = data.ETH.EUR;

//LSK
document.getElementById('LSKpln').textContent = data.LSK.PLN;
//document.getElementById('LSKusd').textContent = data.LSK.USD;
//document.getElementById('LSKeur').textContent = data.LSK.EUR;

//LTC
document.getElementById('LTCpln').textContent = data.LTC.PLN;
//document.getElementById('LTCusd').textContent = data.LTC.USD;
//document.getElementById('LTCeur').textContent = data.LTC.EUR;

//BTG
document.getElementById('BTGpln').textContent = data.BTG.PLN;
//document.getElementById('BTGusd').textContent = data.BTG.USD;
//document.getElementById('BTGeur').textContent = data.BTG.EUR;

//DASH
document.getElementById('DASHpln').textContent = data.DASH.PLN;
//document.getElementById('DASHusd').textContent = data.DASH.USD;
//document.getElementById('DASHeur').textContent = data.DASH.EUR;

//XMR
document.getElementById('XMRpln').textContent = data.XMR.PLN;
//document.getElementById('XMReur').textContent = data.XMR.EUR;

//KZC
document.getElementById('KZCpln').textContent = data.KZC.PLN;
//document.getElementById('KZCusd').textContent = data.KZC.USD;
//document.getElementById('KZCeur').textContent = data.KZC.EUR;


//BCH
document.getElementById('BCHpln').textContent = data.BCH.PLN;

//ZEC
document.getElementById('ZECpln').textContent = data.ZEC.PLN;

//DCR
document.getElementById('DCRpln').textContent = data.DCR.PLN;

//BNB
document.getElementById('BNBpln').textContent = data.BNB.PLN;





}

prices();
 

async function procenty() {


   //polaczenie api z wartosciami szczegolowymi
  const response = await fetch(hrf_priceall);
  const data = await response.json();

  


  
  
  
  // BITCOIN LOGS
  console.log(data.RAW.BTC.USD.MKTCAP);    // market place - kapitalizacja 24h
  console.log(data.RAW.BTC.PLN.CHANGEPCT24HOUR); // zmiana 24h


  




   // funkcja ucinajaca liczby po przecinku + green color gdy dodatnia, red gdy ujemna
  function Round(n, k)
  {
      var factor = Math.pow(10, k);
      return Math.round(n*factor)/factor;


      
  }
  const btc_cut = data.RAW.BTC.PLN.CHANGEPCT24HOUR;
  const eth_cut = data.RAW.ETH.PLN.CHANGEPCT24HOUR;
  const xmr_cut = data.RAW.XMR.PLN.CHANGEPCT24HOUR;
  const ltc_cut = data.RAW.LTC.PLN.CHANGEPCT24HOUR;
  const dash_cut = data.RAW.DASH.PLN.CHANGEPCT24HOUR;
  const btg_cut = data.RAW.BTG.PLN.CHANGEPCT24HOUR;
  const lsk_cut = data.RAW.LSK.PLN.CHANGEPCT24HOUR;
  const bch_cut = data.RAW.BCH.PLN.CHANGEPCT24HOUR;
  const zec_cut = data.RAW.ZEC.PLN.CHANGEPCT24HOUR;
  const dcr_cut = data.RAW.DCR.PLN.CHANGEPCT24HOUR;
  const bnb_cut = data.RAW.BNB.PLN.CHANGEPCT24HOUR;
  const kzc_cut = data.RAW.KZC.PLN.CHANGEPCT24HOUR;

  const btc_pct = (Round(btc_cut, 2));
  const eth_pct = (Round(eth_cut, 2));
  const xmr_pct = (Round(xmr_cut, 2));
  const ltc_pct = (Round(ltc_cut, 2));
  const dash_pct = (Round(dash_cut, 2));
  const btg_pct = (Round(btg_cut, 2));
  const lsk_pct = (Round(lsk_cut, 2));
  const bch_pct = (Round(bch_cut, 2));
  const zec_pct = (Round(zec_cut, 2));
  const dcr_pct = (Round(dcr_cut, 2));
  const bnb_pct = (Round(bnb_cut, 2));
  const kzc_pct = (Round(kzc_cut, 2));

 
//kolorowanie tekstu



 if (btc_pct>0) { document.getElementById('procentbtc').setAttribute("style", "color:green;") }
else {
   document.getElementById('procentbtc').setAttribute("style", "color:red;");

  }  ;


  if (eth_pct>0) { document.getElementById('procenteth').setAttribute("style", "color:green;") }
  else {
    document.getElementById('procenteth').setAttribute("style", "color:red;");

  }  ;

  if (xmr_pct>0) { document.getElementById('procentxmr').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentxmr').setAttribute("style", "color:red;");

  }  ;

  if (ltc_pct>0) { document.getElementById('procentltc').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentltc').setAttribute("style", "color:red;");

  }  ;


  if (dash_pct>0) { document.getElementById('procentdash').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentdash').setAttribute("style", "color:red;");

  }  ;
  if (btg_pct>0) { document.getElementById('procentbtg').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentbtg').setAttribute("style", "color:red;");

  }  ;
  if (lsk_pct>0) { document.getElementById('procentlsk').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentlsk').setAttribute("style", "color:red;");

  }  ;


  if (kzc_pct>0) { document.getElementById('procentkzc').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentkzc').setAttribute("style", "color:red;");

  }  ;

  if (bch_pct>0) { document.getElementById('procentbch').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentbch').setAttribute("style", "color:red;");

  }  ;

  if (dcr_pct>0) { document.getElementById('procentdcr').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentdcr').setAttribute("style", "color:red;");

  }  ;



  if (bnb_pct>0) { document.getElementById('procentbnb').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentbnb').setAttribute("style", "color:red;");

  }  ;


  if (zec_pct>0) { document.getElementById('procentzec').setAttribute("style", "color:green;"); }
  else {
    document.getElementById('procentzec').setAttribute("style", "color:red;");

  }  ;

//wyslanie do htmla
document.getElementById('BTCpct').textContent = btc_pct;
document.getElementById('ETHpct').textContent = eth_pct;
document.getElementById('XMRpct').textContent = xmr_pct;
document.getElementById('LTCpct').textContent = ltc_pct;
document.getElementById('DASHpct').textContent = dash_pct;
document.getElementById('BTGpct').textContent = btg_pct;
document.getElementById('LSKpct').textContent = lsk_pct;

document.getElementById('KZCpct').textContent = kzc_pct;
document.getElementById('BCHpct').textContent = bch_pct;
document.getElementById('ZECpct').textContent = zec_pct;
document.getElementById('DCRpct').textContent = dcr_pct;
document.getElementById('BNBpct').textContent = bnb_pct;





}

procenty();












