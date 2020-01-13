
async function Crypto_ind() {
    let apikey="&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816";
    crypto_href= "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETC&tsyms=USD,PLN,EUR,GBP"+apikey;
    

    const response = await fetch(crypto_href);
    const data = await response.json();


const price_pln = data.RAW.ETC.PLN.PRICE;
const price_usd = data.RAW.ETC.USD.PRICE;
const price_eur = data.RAW.ETC.EUR.PRICE;
const low = data.RAW.ETC.PLN.LOW24HOUR;
const high = data.RAW.ETC.PLN.HIGH24HOUR;
const change = data.RAW.ETC.PLN.CHANGEPCT24HOUR; 
const kapital = data.RAW.ETC.USD.MKTCAP;   
const wolumen = data.RAW.ETC.USD.VOLUME24HOUR; 

const curr = " ETC";
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
else {document.getElementById('change_ind').setAttribute("style", "color:purple;");};




}

Crypto_ind();



async function newsy_ind() {
    let apikey="&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816";
    newsy_href= "https://min-api.cryptocompare.com/data/v2/news/?categories=Etc,ETHEREUMCLASSIC,blockchain"+apikey;    
    
    const response = await fetch(newsy_href);
    const logi = await response.json();
    const news = logi.Data;
    
    let obecna = Date.now();
    
    let roznica0 = news[0].published_on*1000;
    let timelast0 = (Math.round(((obecna-roznica0)/1000)/60));
    
    let roznica1 = news[1].published_on*1000;
    let timelast1 = (Math.round(((obecna-roznica1)/1000)/60));
    
    let roznica2 = news[2].published_on*1000;
    let timelast2 = (Math.round(((obecna-roznica2)/1000)/60));
    
    let roznica3 = news[3].published_on*1000;
    let timelast3 = (Math.round(((obecna-roznica3)/1000)/60));
    
    let roznica4 = news[4].published_on*1000;
    let timelast4 = (Math.round(((obecna-roznica4)/1000)/60));


    
document.getElementById('title0').textContent = news[0].title;
document.getElementById('body0').textContent = news[0].body;
document.getElementById("img0").setAttribute("src",news[0].imageurl);
document.getElementById("url0").setAttribute("href",news[0].url);
document.getElementById("categories0").textContent = news[0].categories;
document.getElementById("timepg-0").textContent = time_convert(timelast0);


document.getElementById('title1').textContent = news[1].title;
document.getElementById('body1').textContent = news[1].body;
document.getElementById("img1").setAttribute("src",news[1].imageurl);
document.getElementById("url1").setAttribute("href",news[1].url);
document.getElementById("categories1").textContent = news[1].categories;
document.getElementById("timepg-1").textContent = time_convert(timelast1);


document.getElementById('title2').textContent = news[2].title;
document.getElementById('body2').textContent = news[2].body;
document.getElementById("img2").setAttribute("src",news[2].imageurl);
document.getElementById("url2").setAttribute("href",news[2].url);
document.getElementById("categories2").textContent = news[2].categories;
document.getElementById("timepg-2").textContent = time_convert(timelast2);

document.getElementById('title3').textContent = news[3].title;
document.getElementById('body3').textContent = news[3].body;
document.getElementById("img3").setAttribute("src",news[3].imageurl);
document.getElementById("url3").setAttribute("href",news[3].url);
document.getElementById("categories3").textContent = news[3].categories;
document.getElementById("timepg-3").textContent = time_convert(timelast3);

document.getElementById('title4').textContent = news[4].title;
document.getElementById('body4').textContent = news[4].body;
document.getElementById("img4").setAttribute("src",news[4].imageurl);
document.getElementById("url4").setAttribute("href",news[4].url);
document.getElementById("categories4").textContent = news[4].categories;
document.getElementById("timepg-4").textContent = time_convert(timelast4);
}
newsy_ind();