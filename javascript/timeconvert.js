//funkcja oblicza ile czasu mineło od wartości num 
function time_convert(num)
 { 
if (num < 60) { 
  const minutes = num % 60;
  return `${minutes} min. temu`;  
}
else if (num > 60, num<119) {
const hours = Math.floor(num / 60);  
const minutes = num % 60;
return  `${hours}.${minutes} godz. temu`;
}

else {
  const hours = Math.floor(num / 60);  
  return `${hours} godz. temu`; ;  
  }
}