


async function newsy() {
let apikey="&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816";
newsy_href= "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"+apikey;    

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

let roznica5 = news[5].published_on*1000;
let timelast5 = (Math.round(((obecna-roznica5)/1000)/60));

let roznica6 = news[6].published_on*1000;
let timelast6 = (Math.round(((obecna-roznica6)/1000)/60));

let roznica7 = news[7].published_on*1000;
let timelast7 = (Math.round(((obecna-roznica7)/1000)/60));

let roznica8 = news[8].published_on*1000;
let timelast8 = (Math.round(((obecna-roznica8)/1000)/60));

let roznica9 = news[9].published_on*1000;
let timelast9 = (Math.round(((obecna-roznica9)/1000)/60));

let roznica10 = news[10].published_on*1000;
let timelast10 = (Math.round(((obecna-roznica10)/1000)/60));

let roznica11 = news[11].published_on*1000;
let timelast11 = (Math.round(((obecna-roznica11)/1000)/60));







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

document.getElementById('title5').textContent = news[5].title;
document.getElementById('body5').textContent = news[5].body;
document.getElementById("img5").setAttribute("src",news[5].imageurl);
document.getElementById("url5").setAttribute("href",news[5].url);
document.getElementById("categories5").textContent = news[5].categories;
document.getElementById("timepg-5").textContent = time_convert(timelast5);

document.getElementById('title6').textContent = news[6].title;
document.getElementById('body6').textContent = news[6].body;
document.getElementById("img6").setAttribute("src",news[6].imageurl);
document.getElementById("url6").setAttribute("href",news[6].url);
document.getElementById("categories6").textContent = news[6].categories;
document.getElementById("timepg-6").textContent = time_convert(timelast6);

document.getElementById('title7').textContent = news[7].title;
document.getElementById('body7').textContent = news[7].body;
document.getElementById("img7").setAttribute("src",news[7].imageurl);
document.getElementById("url7").setAttribute("href",news[7].url);
document.getElementById("categories7").textContent = news[7].categories;
document.getElementById("timepg-7").textContent = time_convert(timelast7);


document.getElementById('title8').textContent = news[8].title;
document.getElementById('body8').textContent = news[8].body;
document.getElementById("img8").setAttribute("src",news[8].imageurl);
document.getElementById("url8").setAttribute("href",news[8].url);
document.getElementById("categories8").textContent = news[8].categories;
document.getElementById("timepg-8").textContent = time_convert(timelast8);

document.getElementById('title9').textContent = news[9].title;
document.getElementById('body9').textContent = news[9].body;
document.getElementById("img9").setAttribute("src",news[9].imageurl);
document.getElementById("url9").setAttribute("href",news[9].url);
document.getElementById("categories9").textContent = news[9].categories;
document.getElementById("timepg-9").textContent = time_convert(timelast9);

document.getElementById('title10').textContent = news[10].title;
document.getElementById('body10').textContent = news[10].body;
document.getElementById("img10").setAttribute("src",news[10].imageurl);
document.getElementById("url10").setAttribute("href",news[10].url);
document.getElementById("categories10").textContent = news[10].categories;
document.getElementById("timepg-10").textContent = time_convert(timelast10);

document.getElementById('title11').textContent = news[11].title;
document.getElementById('body11').textContent = news[11].body;
document.getElementById("img11").setAttribute("src",news[11].imageurl);
document.getElementById("url11").setAttribute("href",news[11].url);
document.getElementById("categories11").textContent = news[11].categories;
document.getElementById("timepg-11").textContent = time_convert(timelast11);


//document.getElementById('title^').textContent = news[^].title;
//document.getElementById('body^').textContent = news[^].body;
//document.getElementById("img^").setAttribute("src",news[^].source_info.img);
//document.getElementById("url^").setAttribute("href",news[^].url);
//ocument.getElementById("categories^").setAttribute("href",news[^].categories1);

}
newsy();



async function news_feeds() {
let api_key = "&api_key=a19ca4952f0fe76f7457c50e3df9029c473e710c3e29360c97d2afb621b25816"
const api_href = "https://min-api.cryptocompare.com/data/news/feeds?extraParams=Crypinfo"+api_key

const response = await fetch(api_href);
const logi = await response.json();

    
//     //title logs of feeds
document.getElementById("feed0").textContent = logi[0].name;
document.getElementById("feed1").textContent = logi[1].name;
document.getElementById("feed2").textContent = logi[2].name;

document.getElementById("feed3").textContent = logi[3].name;
document.getElementById("feed4").textContent = logi[4].name;
document.getElementById("feed5").textContent = logi[5].name;
document.getElementById("feed6").textContent = logi[6].name;
document.getElementById("feed7").textContent = logi[7].name;
document.getElementById("feed8").textContent = logi[8].name;
document.getElementById("feed9").textContent = logi[9].name;
document.getElementById("feed10").textContent = logi[10].name;
document.getElementById("feed11").textContent = logi[11].name;
document.getElementById("feed12").textContent = logi[12].name;
document.getElementById("feed14").textContent = logi[14].name;
document.getElementById("feed15").textContent = logi[15].name;
document.getElementById("feed16").textContent = logi[16].name;
document.getElementById("feed17").textContent = logi[17].name;
document.getElementById("feed18").textContent = logi[18].name;
document.getElementById("feed19").textContent = logi[19].name;
document.getElementById("feed20").textContent = logi[20].name;
document.getElementById("feed21").textContent = logi[21].name;
document.getElementById("feed22").textContent = logi[22].name;
document.getElementById("feed23").textContent = logi[23].name;
document.getElementById("feed24").textContent = logi[24].name;
document.getElementById("feed25").textContent = logi[25].name;
document.getElementById("feed26").textContent = logi[26].name;
document.getElementById("feed27").textContent = logi[27].name;
document.getElementById("feed28").textContent = logi[28].name;
document.getElementById("feed29").textContent = logi[29].name;
document.getElementById("feed31").textContent = logi[31].name;
document.getElementById("feed32").textContent = logi[32].name;






//   //img logo of feeds
document.getElementById("img_feed0").setAttribute("src",logi[0].img);
document.getElementById("img_feed1").setAttribute("src",logi[1].img);
document.getElementById("img_feed2").setAttribute("src",logi[2].img);
document.getElementById("img_feed3").setAttribute("src",logi[3].img);
document.getElementById("img_feed4").setAttribute("src",logi[4].img);
document.getElementById("img_feed5").setAttribute("src",logi[5].img);
document.getElementById("img_feed6").setAttribute("src",logi[6].img);
document.getElementById("img_feed7").setAttribute("src",logi[7].img);
document.getElementById("img_feed8").setAttribute("src",logi[8].img);
document.getElementById("img_feed9").setAttribute("src",logi[9].img);
document.getElementById("img_feed10").setAttribute("src",logi[10].img);
document.getElementById("img_feed11").setAttribute("src",logi[11].img);
document.getElementById("img_feed12").setAttribute("src",logi[12].img);
document.getElementById("img_feed14").setAttribute("src",logi[14].img);
document.getElementById("img_feed15").setAttribute("src",logi[15].img);
document.getElementById("img_feed16").setAttribute("src",logi[16].img);
document.getElementById("img_feed17").setAttribute("src",logi[17].img);
document.getElementById("img_feed18").setAttribute("src",logi[18].img);
document.getElementById("img_feed19").setAttribute("src",logi[19].img);
document.getElementById("img_feed20").setAttribute("src",logi[20].img);
document.getElementById("img_feed21").setAttribute("src",logi[21].img);
document.getElementById("img_feed22").setAttribute("src",logi[22].img);
document.getElementById("img_feed23").setAttribute("src",logi[23].img);
document.getElementById("img_feed24").setAttribute("src",logi[24].img);
document.getElementById("img_feed25").setAttribute("src",logi[25].img);
document.getElementById("img_feed26").setAttribute("src",logi[26].img);
document.getElementById("img_feed27").setAttribute("src",logi[27].img);
document.getElementById("img_feed28").setAttribute("src",logi[28].img);
document.getElementById("img_feed29").setAttribute("src",logi[29].img);
document.getElementById("img_feed31").setAttribute("src",logi[31].img);
document.getElementById("img_feed32").setAttribute("src",logi[32].img);






 }


news_feeds();

