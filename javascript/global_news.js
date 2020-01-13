

async function global_news() {
  let apikey="&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816";
  href= "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"+apikey;
  const response = await fetch(href);
  const logi = await response.json();

let obecna = Date.now();
let roznica = logi.Data[0].published_on*1000;
let time_nw = (Math.round(((obecna-roznica)/1000)/60));




  
  document.getElementById('title').textContent = logi.Data[0].title;
  document.getElementById("img").setAttribute("src",logi.Data[0].imageurl);
  document.getElementById("url").setAttribute("href",logi.Data[0].url);
  document.getElementById("time-nw").textContent = time_convert(time_nw);
  
}  

global_news();

//let x = new Date(xdata*1000); 