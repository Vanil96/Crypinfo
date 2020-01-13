async function stats() {
    const hrefbinance = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BCH,ETH,XMR,DASH,LTC,ZEC,BTG,ETC,LSK&tsyms=BTC&e=Binance";
    const hrefokex = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BCH,ETH,XMR,DASH,LTC,ZEC,BTG,ETC,LSK&tsyms=BTC&e=Okex"
    const hrefexmo = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BCH,ETH,XMR,DASH,LTC,ZEC,BTG,ETC,LSK&tsyms=BTC&e=Exmo"
    const hrefkucoin = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BCH,ETH,XMR,DASH,LTC,ZEC,BTG,ETC,LSK&tsyms=BTC&e=kucoin"
const hreftopvol = "https://min-api.cryptocompare.com/data/top/exchanges?fsym=BTC&tsym=USD&limit=10"
   
    //laczenie api
    const response_binance = await fetch(hrefbinance);   
    const binance = await response_binance.json();      

    const response_okex = await fetch(hrefokex);   
    const okex = await response_okex.json();   

    const response_exmo = await fetch(hrefexmo);   
    const exmo = await response_exmo.json();   

    const response_kucoin = await fetch(hrefkucoin);   
    const kucoin = await response_kucoin.json();   

    const response_topvol = await fetch(hreftopvol);   
    const topvolume = await response_topvol.json(); 

//porownanie cen na gieldach
  document.getElementById("BCH_bin").textContent = binance.BCH.BTC;
  document.getElementById("ETH_bin").textContent = binance.ETH.BTC;
  document.getElementById("XMR_bin").textContent = binance.XMR.BTC;
  document.getElementById("DAS_bin").textContent = binance.DASH.BTC;
  document.getElementById("LTC_bin").textContent = binance.LTC.BTC;
  document.getElementById("ZEC_bin").textContent = binance.ZEC.BTC;
  document.getElementById("BTG_bin").textContent = binance.BTG.BTC;
  document.getElementById("ETC_bin").textContent = binance.ETC.BTC;
  document.getElementById("LSK_bin").textContent = binance.LSK.BTC;

  document.getElementById("BCH_okex").textContent = okex.BCH.BTC;
  document.getElementById("ETH_okex").textContent = okex.ETH.BTC;
  document.getElementById("XMR_okex").textContent = okex.XMR.BTC;
  document.getElementById("DAS_okex").textContent = okex.DASH.BTC;
  document.getElementById("LTC_okex").textContent = okex.LTC.BTC;
  document.getElementById("ZEC_okex").textContent = okex.ZEC.BTC;
  document.getElementById("BTG_okex").textContent = okex.BTG.BTC;
  document.getElementById("ETC_okex").textContent = okex.ETC.BTC;
  document.getElementById("LSK_okex").textContent = okex.LSK.BTC;

  document.getElementById("BCH_exmo").textContent = exmo.BCH.BTC;
  document.getElementById("ETH_exmo").textContent = exmo.ETH.BTC;
  document.getElementById("XMR_exmo").textContent = exmo.XMR.BTC;
  document.getElementById("DAS_exmo").textContent = exmo.DASH.BTC;
  document.getElementById("LTC_exmo").textContent = exmo.LTC.BTC;
  document.getElementById("ZEC_exmo").textContent = exmo.ZEC.BTC;
  document.getElementById("BTG_exmo").textContent = exmo.BTG.BTC;
  document.getElementById("ETC_exmo").textContent = exmo.ETC.BTC;
  document.getElementById("LSK_exmo").textContent = exmo.LSK.BTC;

  document.getElementById("BCH_kuc").textContent = kucoin.BCH.BTC;
 document.getElementById("ETH_kuc").textContent = kucoin.ETH.BTC;
  document.getElementById("XMR_kuc").textContent = kucoin.XMR.BTC;
  document.getElementById("DAS_kuc").textContent = kucoin.DASH.BTC;
  document.getElementById("LTC_kuc").textContent = kucoin.LTC.BTC;
  document.getElementById("ZEC_kuc").textContent = kucoin.ZEC.BTC;
  document.getElementById("BTG_kuc").textContent = kucoin.BTG.BTC;
  document.getElementById("ETC_kuc").textContent = kucoin.ETC.BTC;
  document.getElementById("LSK_kuc").textContent = kucoin.LSK.BTC;

//top 10 gield 24h volumen BTC-USD

const topvol = topvolume.Data;


document.getElementById("topex-0").textContent = topvol[0].exchange;
document.getElementById("topex-1").textContent = topvol[1].exchange;
document.getElementById("topex-2").textContent = topvol[2].exchange;
document.getElementById("topex-3").textContent = topvol[3].exchange;
document.getElementById("topex-4").textContent = topvol[4].exchange;
document.getElementById("topex-5").textContent = topvol[5].exchange;
document.getElementById("topex-6").textContent = topvol[6].exchange;
document.getElementById("topex-7").textContent = topvol[7].exchange;
document.getElementById("topex-8").textContent = topvol[8].exchange;
document.getElementById("topex-9").textContent = topvol[9].exchange;


document.getElementById("topvol-0").textContent = topvol[0].volume24h.toLocaleString(); 
document.getElementById("topvol-1").textContent = topvol[1].volume24h.toLocaleString();
document.getElementById("topvol-2").textContent = topvol[2].volume24h.toLocaleString(); 
document.getElementById("topvol-3").textContent = topvol[3].volume24h.toLocaleString(); 
document.getElementById("topvol-4").textContent = topvol[4].volume24h.toLocaleString(); 
document.getElementById("topvol-5").textContent = topvol[5].volume24h.toLocaleString(); 
document.getElementById("topvol-6").textContent = topvol[6].volume24h.toLocaleString(); 
document.getElementById("topvol-7").textContent = topvol[7].volume24h.toLocaleString(); 
document.getElementById("topvol-8").textContent = topvol[8].volume24h.toLocaleString(); 
document.getElementById("topvol-9").textContent = topvol[9].volume24h.toLocaleString(); 

document.getElementById("topvolto-0").textContent = topvol[0].volume24hTo.toLocaleString(); 
document.getElementById("topvolto-1").textContent = topvol[1].volume24hTo.toLocaleString(); 
document.getElementById("topvolto-2").textContent = topvol[2].volume24hTo.toLocaleString(); 
document.getElementById("topvolto-3").textContent = topvol[3].volume24hTo.toLocaleString(); 
document.getElementById("topvolto-4").textContent = topvol[4].volume24hTo.toLocaleString(); 
document.getElementById("topvolto-5").textContent = topvol[5].volume24hTo.toLocaleString(); 
document.getElementById("topvolto-6").textContent = topvol[6].volume24hTo.toLocaleString(); 
document.getElementById("topvolto-7").textContent = topvol[7].volume24hTo.toLocaleString(); 
document.getElementById("topvolto-8").textContent = topvol[8].volume24hTo.toLocaleString(); 
document.getElementById("topvolto-9").textContent = topvol[9].volume24hTo.toLocaleString(); 


}

stats();

