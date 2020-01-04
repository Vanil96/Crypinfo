async function newsy() {

  const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
  const logi = await response.json();


  console.log(logi.Data[1].title); 
  console.log(logi.Data[1].url)
  console.log(logi.Data[1].source_info.img); 
 ; 
document.getElementById('title1').textContent = logi.Data[0].title;
//document.getElementById('body1').textContent = logi.Data[0].body;
document.getElementById("img1").setAttribute("src",logi.Data[0].source_info.img);
document.getElementById("url1").setAttribute("href",logi.Data[0].url);




//document.getElementById('title2').textContent = logi.Data[1].title;
//document.getElementById('body2').textContent = logi.Data[1].body;
//document.getElementById("img2").setAttribute("src",logi.Data[1].source_info.img);
//document.getElementById("url2").setAttribute("href",logi.Data[1].url);


//document.getElementById('title3').textContent = logi.Data[2].title;
//document.getElementById('body3').textContent = logi.Data[2].body;
//document.getElementById("img3").setAttribute("src",logi.Data[2].source_info.img);
//document.getElementById("url3").setAttribute("href",logi.Data[2].url);
}


newsy();



