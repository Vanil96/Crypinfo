async function newsy_ind() {
let apikey="&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816";
newsy_href= "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"+apikey;    

const response = await fetch(newsy_href);
const logi = await response.json();


const news = logi.Data;


document.getElementById('title0').textContent = news[0].title;
document.getElementById('body0').textContent = news[0].body;
document.getElementById("img0").setAttribute("src",news[0].imageurl);
document.getElementById("url0").setAttribute("href",news[0].url);
document.getElementById("categories0").textContent = news[0].categories;



document.getElementById('title1').textContent = news[1].title;
document.getElementById('body1').textContent = news[1].body;
document.getElementById("img1").setAttribute("src",news[1].imageurl);
document.getElementById("url1").setAttribute("href",news[1].url);
document.getElementById("categories1").textContent = news[1].categories;



document.getElementById('title2').textContent = news[2].title;
document.getElementById('body2').textContent = news[2].body;
document.getElementById("img2").setAttribute("src",news[2].imageurl);
document.getElementById("url2").setAttribute("href",news[2].url);
document.getElementById("categories2").textContent = news[2].categories;

document.getElementById('title3').textContent = news[3].title;
document.getElementById('body3').textContent = news[3].body;
document.getElementById("img3").setAttribute("src",news[3].imageurl);
document.getElementById("url3").setAttribute("href",news[3].url);
document.getElementById("categories3").textContent = news[3].categories;


};
newsy_ind();
