

async function newsy() {
const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
const logi = await response.json();

const news = logi.Data;



document.getElementById('title1').textContent = logi.Data[11].title;
document.getElementById('body1').textContent = news[1].body;
document.getElementById("img1").setAttribute("src",news[1].source_info.img);
document.getElementById("url1").setAttribute("href",news[1].url);
document.getElementById("categories1").textContent = news[1].categories;



document.getElementById('title2').textContent = news[2].title;
document.getElementById('body2').textContent = news[2].body;
document.getElementById("img2").setAttribute("src",news[2].source_info.img);
document.getElementById("url2").setAttribute("href",news[2].url);
document.getElementById("categories2").textContent = news[2].categories;

document.getElementById('title3').textContent = news[3].title;
document.getElementById('body3').textContent = news[3].body;
document.getElementById("img3").setAttribute("src",news[3].source_info.img);
document.getElementById("url3").setAttribute("href",news[3].url);
document.getElementById("categories3").textContent = news[3].categories;

document.getElementById('title4').textContent = news[4].title;
document.getElementById('body4').textContent = news[4].body;
document.getElementById("img4").setAttribute("src",news[4].source_info.img);
document.getElementById("url4").setAttribute("href",news[4].url);
document.getElementById("categories4").textContent = news[4].categories;

document.getElementById('title5').textContent = news[5].title;
document.getElementById('body5').textContent = news[5].body;
document.getElementById("img5").setAttribute("src",news[5].source_info.img);
document.getElementById("url5").setAttribute("href",news[5].url);
document.getElementById("categories5").textContent = news[5].categories;


document.getElementById('title6').textContent = news[6].title;
document.getElementById('body6').textContent = news[6].body;
document.getElementById("img6").setAttribute("src",news[6].source_info.img);
document.getElementById("url6").setAttribute("href",news[6].url);
document.getElementById("categories6").textContent = news[6].categories;

document.getElementById('title7').textContent = news[7].title;
document.getElementById('body7').textContent = news[7].body;
document.getElementById("img7").setAttribute("src",news[7].source_info.img);
document.getElementById("url7").setAttribute("href",news[7].url);
document.getElementById("categories7").textContent = news[7].categories;


document.getElementById('title8').textContent = news[8].title;
document.getElementById('body8').textContent = news[8].body;
document.getElementById("img8").setAttribute("src",news[8].source_info.img);
document.getElementById("url8").setAttribute("href",news[8].url);
document.getElementById("categories8").textContent = news[8].categories;

document.getElementById('title9').textContent = news[9].title;
document.getElementById('body9').textContent = news[9].body;
document.getElementById("img9").setAttribute("src",news[9].source_info.img);
document.getElementById("url9").setAttribute("href",news[9].url);
document.getElementById("categories9").textContent = news[9].categories;

document.getElementById('title10').textContent = news[10].title;
document.getElementById('body10').textContent = news[10].body;
document.getElementById("img10").setAttribute("src",news[10].source_info.img);
document.getElementById("url10").setAttribute("href",news[10].url);
document.getElementById("categories10").textContent = news[10].categories;


//document.getElementById('title^').textContent = news[^].title;
//document.getElementById('body^').textContent = news[^].body;
//document.getElementById("img^").setAttribute("src",news[^].source_info.img);
//document.getElementById("url^").setAttribute("href",news[^].url);
//ocument.getElementById("categories^").setAttribute("href",news[^].categories1);








}



newsy();


