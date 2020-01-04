const link = "https://bitbay.net/API/Public/BTCPLN/ticker.json";

async function btcpln() {

    const response = await fetch(link);
    const data = await response.json();
    console.log(JSON.stringify(data));
        // w konsoli sobie wyswietla
      
    return data;

}
const link2 = "https://bitbay.net/API/Public/BTCUSD/ticker.json";

async function btcpln1() {

    const response = await fetch(link2);
    const data1 = await response.json();
    console.log(JSON.stringify(data1));
        // w konsoli sobie wyswietla
        
    return data1;

}


btcpln().then(rates => {
   console.log(rates);
   
});

btcpln1().then(rates => {
    console.log(rates);


 });

