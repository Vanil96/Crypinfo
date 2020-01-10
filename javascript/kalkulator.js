


//var data1 = localStorage.getItem('data1');


async function przeliczaj() {
    const api_cryp = "https:min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LSK,BTG,LTC,DASH,XMR,KZC&tsyms=PLN&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816";
    const api_fiat = "http://api.nbp.pl/api/exchangerates/tables/A/?format=json";
        
   
    //laczenie api
    const response = await fetch(api_cryp);    //api Crypto
    const cryp = await response.json();       // json-zmienna
    

    const response2 = await fetch(api_fiat);    //api fiat
    const fiat = await response2.json();  
    


//zmienne kryptowalut 
var btc = cryp.BTC.PLN;
var eth = cryp.ETH.PLN;
var xmr = cryp.XMR.PLN;
var dash = cryp.DASH.PLN;
var ltc = cryp.LTC.PLN;
var btg = cryp.BTG.PLN;
var lsk = cryp.LSK.PLN;




//zmienne walut fiat (globalnych)


var pln = 1;
var eur = fiat[0].rates[7].mid;
var usd = fiat[0].rates[1].mid; 
var chf = fiat[0].rates[9].mid;
var gbp = fiat[0].rates[10].mid;

 
var krok1;
var krok2;


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
                               
    default:
        krok2 = "Connection Lost";
}

przelicznik.wynik.value = krok2; 


}


        
    //     switch (przelicznik.co.value)
    //     {
    //         case "PLN":
    //             krok1 = przelicznik.ile.value*pln;
    //             break;
    //         case "EUR":
    //             krok1 = przelicznik.ile.value*eur;
    //             break;
    //         case "USD":
    //             krok1 = przelicznik.ile.value*usd;
    //             break;
    //         case "BTC":
    //              krok1 = przelicznik.ile.value*btc;
    //             break;
    //             case "ETH":
    //                 krok1 = przelicznik.ile.value*eth;
    //                break;
    //                case "XMR":
    //                 krok1 = przelicznik.ile.value*xmr;
    //                break;
    //                case "DASH":
    //                 krok1 = przelicznik.ile.value*dash;
    //                break;
    //                case "LTC":
    //                 krok1 = przelicznik.ile.value*ltc;
    //                break;
    //                case "BTG":
    //                 krok1 = przelicznik.ile.value*btg;
    //                break;
    //                case "LSK":
    //                 krok1 = przelicznik.ile.value*lsk;
    //                break;
    //         default:
    //             krok1 = "error";
    //     }
        
    //     switch (przelicznik.naCo.value)
    //     {
    //         case "PLN":
    //             krok2 = krok1/pln;
    //             break;
    //         case "EUR":
    //             krok2 = krok1/eur;
    //             break;
    //         case "USD":
    //             krok2 = krok1/usd;
    //             break;
    //         case "BTC":
    //             krok2 = krok1/btc;
    //             break;
    //             case "BTC":
    //                 krok2 = krok1/eth;
    //                 break;
    //                 case "BTC":
    //                     krok2 = krok1/xmr;
    //                     break;
    //                     case "BTC":
    //                         krok2 = krok1/dash;
    //                         break;
    //                         case "BTC":
    //                             krok2 = krok1/ltc;
    //                             break;
    //                             case "BTC":
    //                                 krok2 = krok1/btg;
    //                                 break;
    //                                 case "BTC":
    //                                     krok2 = krok1/lsk;
    //                                     break;
                                       
    //         default:
    //             krok2 = "Connection Lost";
    //     }
        
    // przelicznik.wynik.value = krok2; 

    
    //   }






      


