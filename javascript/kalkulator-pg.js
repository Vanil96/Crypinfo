


//var data1 = localStorage.getItem('data1');


async function przeliczaj() {
    const api_cryp = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LSK,BTG,LTC,DASH,XMR,KZC,BCH,ZEC,DCR,BNB,ETC,XRP,EOS,ATOM,XTZ,NEO,XZC,STRAT,OMG,WAVES,LINK&tsyms=PLN&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816";
    const api_fiat = "http://api.nbp.pl/api/exchangerates/tables/A/?format=json";
        
   
    //laczenie api
    const response = await fetch(api_cryp);    //api Crypto
    const cryp = await response.json();       // json-zmienna
    

    const response2 = await fetch(api_fiat);    //api fiat
    const fiat = await response2.json();  
    


//zmienne kryptowalut 
let btc = cryp.BTC.PLN;
let eth = cryp.ETH.PLN;
let xmr = cryp.XMR.PLN;
let dash = cryp.DASH.PLN;
let ltc = cryp.LTC.PLN;
let btg = cryp.BTG.PLN;
let lsk = cryp.LSK.PLN;

let bch = cryp.BCH.PLN;
let zec = cryp.ZEC.PLN;
let dcr = cryp.DCR.PLN;
let bnb = cryp.BNB.PLN;
let etc = cryp.ETC.PLN;
let xrp = cryp.XRP.PLN;
let eos = cryp.EOS.PLN;
let atom = cryp.ATOM.PLN;
let xtz = cryp.XTZ.PLN;
let neo = cryp.NEO.PLN;
let xzc = cryp.XZC.PLN;
let strat = cryp.STRAT.PLN;
let omg = cryp.OMG.PLN;
let waves = cryp.WAVES.PLN;
let link = cryp.LINK.PLN;








//zmienne walut fiat (globalnych)


let pln = 1;
let eur = fiat[0].rates[7].mid;
let usd = fiat[0].rates[1].mid; 
let chf = fiat[0].rates[9].mid;
let gbp = fiat[0].rates[10].mid;

let hkd = fiat[0].rates[3].mid;
let cad = fiat[0].rates[4].mid;
let nzd = fiat[0].rates[5].mid;
let czk = fiat[0].rates[13].mid;
let sek = fiat[0].rates[17].mid;
let sgd = fiat[0].rates[6].mid;
let huf = fiat[0].rates[8].mid;
let uah = fiat[0].rates[11].mid;
let dkk = fiat[0].rates[14].mid;
let hrk = fiat[0].rates[18].mid;
let bgn = fiat[0].rates[20].mid;
let ils = fiat[0].rates[22].mid;
let brl = fiat[0].rates[27].mid;




 
let krok1;
let krok2;


switch (przelicznik.co.value)
{
    case "PLN":
        krok1 = przelicznik.ile.value*pln;
        break;
    case "EUR":
        krok1 = przelicznik.ile.value*eur;
        break;
    case "USD":
        krok1 = przelicznik.ile.value*usd;
        break;
    case "BTC":
         krok1 = przelicznik.ile.value*btc;
        break;
        case "ETH":
            krok1 = przelicznik.ile.value*eth;
           break;
           case "XMR":
            krok1 = przelicznik.ile.value*xmr;
           break;
           case "DASH":
            krok1 = przelicznik.ile.value*dash;
           break;
           case "LTC":
            krok1 = przelicznik.ile.value*ltc;
           break;
           case "BTG":
            krok1 = przelicznik.ile.value*btg;
           break;
           case "LSK":
            krok1 = przelicznik.ile.value*lsk;
           break;
           case "CHF":
            krok1 = przelicznik.ile.value*chf;
           break;
           case "GBP":
            krok1 = przelicznik.ile.value*gbp;
           break;
// dodatkowe waluty tradycyjne
           case "HKD":
            krok1 = przelicznik.ile.value*hkd;
           break;

           case "CAD":
            krok1 = przelicznik.ile.value*cad;
           break;


           case "NZD":
            krok1 = przelicznik.ile.value*nzd;
           break;

           case "CZK":
            krok1 = przelicznik.ile.value*czk;
           break;

           case "SEK":
            krok1 = przelicznik.ile.value*sek;
           break;

           case "SGD":
            krok1 = przelicznik.ile.value*sgd;
           break;

           case "HUF":
            krok1 = przelicznik.ile.value*huf;
           break;

           case "UAH":
            krok1 = przelicznik.ile.value*uah;
           break;

           case "DKK":
            krok1 = przelicznik.ile.value*dkk;
           break;

           case "HRK":
            krok1 = przelicznik.ile.value*hrk;
           break;

           case "BGN":
            krok1 = przelicznik.ile.value*bgn;
           break;

           case "ILS":
            krok1 = przelicznik.ile.value*ils;
           break;

           case "BRL":
            krok1 = przelicznik.ile.value*brl;
           break;
//dodatkowe kryptowaluty

case "BCH":
    krok1 = przelicznik.ile.value*bch;
   break;

   case "ZEC":
    krok1 = przelicznik.ile.value*zec;
   break;

   case "DCR":
    krok1 = przelicznik.ile.value*dcr;
   break;

   case "BNB":
    krok1 = przelicznik.ile.value*bnb;
   break;

   case "ETC":
    krok1 = przelicznik.ile.value*etc;
   break;

   case "XRP":
    krok1 = przelicznik.ile.value*xrp;
   break;

   case "EOS":
    krok1 = przelicznik.ile.value*eos;
   break;

   case "ATOM":
    krok1 = przelicznik.ile.value*atom;
   break;

   case "XTZ":
    krok1 = przelicznik.ile.value*xtz;
   break;

   case "NEO":
    krok1 = przelicznik.ile.value*neo;
   break;

   case "XZC":
    krok1 = przelicznik.ile.value*xzc;
   break;

   case "STRAT":
    krok1 = przelicznik.ile.value*strat;
   break;

   case "OMG":
    krok1 = przelicznik.ile.value*omg;
   break;

   case "WAVES":
    krok1 = przelicznik.ile.value*waves;
   break;

   case "LINK":
    krok1 = przelicznik.ile.value*link;
   break;





    default:
        krok1 = "error";
}

switch (przelicznik.naCo.value)

{
    case "PLN":
        krok2 = krok1/pln;
        break;
    case "EUR":
        krok2 = krok1/eur;
        break;
    case "USD":
        krok2 = krok1/usd;
        break;
    case "BTC":
        krok2 = krok1/btc;
        break;
        case "ETH":
            krok2 = krok1/eth;
            break;
case "XMR":
                krok2 = krok1/xmr;
                break;
 case "DASH":
                    krok2 = krok1/dash;
                    break;
case "LTC":
  krok2 = krok1/ltc;
                        break;
                        case "BTG":
                            krok2 = krok1/btg;
                            break;
                            case "LSK":
                                krok2 = krok1/lsk;
                                break;
                                case "GBP":
                                    krok2 = krok1/gbp;
                                    break;
                                    case "CHF":
                                        krok2 = krok1/chf;
                                        break;
//dodatkowe waluty tradycyjne
                                        case "HKD":
                                            krok2 = krok1/hkd;
                                            break;
                                            case "CAD":
                                                krok2 = krok1/cad;
                                                break;

                                                case "NZD":
                                                    krok2 = krok1/nzd;
                                                    break;

                                                    case "CZK":
                                                        krok2 = krok1/czk;
                                                        break;

                                                        case "SEK":
                                                            krok2 = krok1/sek;
                                                            break;

                                                            case "SGD":
                                                                krok2 = krok1/sgd;
                                                                break;

                                                                case "HUF":
                                                                    krok2 = krok1/huf;
                                                                    break;

                                                                    case "UAH":
                                                                        krok2 = krok1/uah;
                                                                        break;

                                                                        case "DKK":
                                                                            krok2 = krok1/dkk;
                                                                            break;

                                                                            case "HRK":
                                                                                krok2 = krok1/hrk;
                                                                                break;

                                                                                case "BGN":
                                                                                    krok2 = krok1/bgn;
                                                                                    break;

                                                                                    case "ILS":
                                                                                        krok2 = krok1/ils;
                                                                                        break;
                                                                                        case "BRL":
                                                                                            krok2 = krok1/brl;
                                                                                            break;
//dodatkowe kryptowaluty 
case "BCH":
krok2 = krok1/bch;
break;

case "ZEC":
krok2 = krok1/zec;
break;
 
case "DCR":
krok2 = krok1/dcr;
break;

case "BNB":
krok2 = krok1/bnb;
break;
          
case "ETC":
krok2 = krok1/etc;
break;          

case "XRP":
krok2 = krok1/xrp;
break;          

case "EOS":
krok2 = krok1/eos;
break;
        

case "ATOM":
krok2 = krok1/atom;
break;     

case "XTZ":
krok2 = krok1/xtz;
break;     

case "NEO":
krok2 = krok1/neo;
break;
          
case "XZC":
krok2 = krok1/xzc;
break;
          
case "STRAT":
krok2 = krok1/strat;
break;
          
case "OMG":
krok2 = krok1/omg;
break;
          
case "WAVES":
krok2 = krok1/waves;
break;
          
case "LINK":
krok2 = krok1/link;
break;
          
                                                                                        

                               
    default:
        krok2 = "Connection Lost";
}

przelicznik.wynik.value = krok2.toLocaleString(); 


}


    





      


