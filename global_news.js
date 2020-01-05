
async function global_news() {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
  const logi = await response.json();
  document.getElementById('title').textContent = logi.Data[0].title;
  document.getElementById("img").setAttribute("src",logi.Data[0].source_info.img);
  document.getElementById("url").setAttribute("href",logi.Data[0].url);
  
}  

global_news();