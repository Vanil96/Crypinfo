
//PLN
const linkbtcpln = "https://bitbay.net/API/Public/BTCPLN/ticker.json";

async function btcpln() {

    
  const response = await fetch(linkbtcpln);
  const data1 = await response.json();
  console.log(JSON.stringify(data1));   
  document.getElementById('btcpln-buy').textContent = data1.bid;
  document.getElementById('btcpln-sell').textContent = data1.ask;
  document.getElementById('btcpln-average').textContent = data1.average;

 

  

}

btcpln();


 


const linkprice = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LSK,BTG,LTC,DASH,XMR,KZC&tsyms=BTC,USD,EUR,PLN,ETH";

async function prices() {

    
  const response = await fetch(linkprice);
  const data = await response.json();
  console.log(JSON.stringify(data));
  console.log(data.BTC.PLN, data.BTC.EUR, data.KZC.BTC);    

//BTC
document.getElementById('BTCpln').textContent = data.BTC.PLN;    
document.getElementById('BTCusd').textContent = data.BTC.USD;    
document.getElementById('BTCeur').textContent = data.BTC.EUR;   




//ETH
document.getElementById('ETHpln').textContent = data.ETH.PLN;    
document.getElementById('ETHusd').textContent = data.ETH.USD;    
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
document.getElementById('DASHusd').textContent = data.DASH.USD;  
document.getElementById('DASHeur').textContent = data.DASH.EUR;   

//XMR
document.getElementById('XMRpln').textContent = data.XMR.PLN;    
document.getElementById('XMRusd').textContent = data.XMR.USD;    
document.getElementById('XMReur').textContent = data.XMR.EUR;  

//KZC
document.getElementById('KZCpln').textContent = data.KZC.PLN;    
//document.getElementById('KZCusd').textContent = data.KZC.USD;    
//document.getElementById('KZCeur').textContent = data.KZC.EUR;



}

prices();


const linkpriceall = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD,PLN";

async function pricesall() {

    
  const response = await fetch(linkpriceall);
  const data = await response.json();
  
  // BITCOIN LOGS
  console.log(data.RAW.BTC.USD.PRICE);
  console.log(data.RAW.BTC.USD.OPENDAY);   
  

  console.log(data.RAW.ETH.PLN.OPENDAY);



}

pricesall();


