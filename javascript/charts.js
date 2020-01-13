var ctxL = document.getElementById("lineChart").getContext('2d');
    var gradientFill = ctxL.createLinearGradient(0, 0, 0, 290);
    gradientFill.addColorStop(0, "rgba(173, 53, 186, 1)");
    gradientFill.addColorStop(1, "rgba(173, 53, 186, 0.1)");
    var myLineChart = new Chart(ctxL, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            data: [0, 65, 45, 65, 35, 65, 0],
            backgroundColor: gradientFill,
            borderColor: [
              '#AD35BA',
            ],
            borderWidth: 2,
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
          }
        ]
      },
      options: {
        responsive: true
      }
    });




    <div class="tabela table-responsive-lg  "  >  					
	<table class="table table-striped">
		<thead>
		  <tr>
			<th width="20%"> Lista</th>
			<th>  Binance</th>
			<th> CrypFinex </th>
			<th > Eldofinex </th>
			<th > Mindex </th>
		  </tr>
		</thead>
		<tbody>
		  <tr>
			<td scope="row"> 
			
		 <img src="img/BTC.png">  BTC    </td>
		
		
			<td> <span id='name'>3242342 </span> </td>
			<td> <span id='name'>3242342 </span> </td>
			<td> <span id='name'>3242342 </span> </td>
			<td> <span id='name'>3242342 </span> </td>
		  </tr>
		  <tr>
			<td scope="row"><img src="img/BCH.png"> BCH</td>
			
			<td> <span id='name'>3242342 </span> </td>
			<td> <span id='name'>3242342 </span> </td>
			<td> <span id='name'>3242342 </span> </td>
			<td> <span id='name'>3242342 </span> </td>
		</tr>
		  <tr>
			<td scope="row"><img src="img/ETH.png"> ETH</td>
			
			<td> <span id='name'>3242342 </span> </td>
			<td> <span id='name'>3242342 </span> </td>
			<td> <span id='name'>3242342 </span> </td>
			<td> <span id='name'>3242342 </span> </td>
		</tr>
		  <tr>
			  <td scope="row"><img src="img/XMR.png"> XMR</td>
			  
			  <td> <span id='name'>3242342 </span> </td>
			  <td> <span id='name'>3242342 </span> </td>
			  <td> <span id='name'>3242342 </span> </td>
			  <td> <span id='name'>3242342 </span> </td>
			</tr>
			<tr>
			  <td scope="row"><img src="img/DASH.png"> DASH</th>
			 
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
			</tr>
			<tr>
			  <td scope="row"><img src="img/LTC.png"> LTC</td>
			  
			  <td> <span id='name'>3242342 </span> </td>
			  <td> <span id='name'>3242342 </span> </td>
			  <td> <span id='name'>3242342 </span> </td>
			  <td> <span id='name'>3242342 </span> </td>
			</tr>
			<tr>
				<td scope="row"><img src="img/ZEC.png"> ZEC</td>
				
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
			</tr>
			  <tr>
				<td scope="row"><img src="img/DCR.png"> DCR</td>
				
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
			</tr>
	
			  <tr>
				<td scope="row"><img src="img/BNB.png"> BNB</td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
			</tr>
			<tr>
				<td scope="row"><img src="img/BTG.png"> BTG</td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
			</tr>
			
			<tr>
				<td scope="row"><img src="img/ETC.png"> ETC</td>
				
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
			</tr>
			  <tr>
				<td scope="row"><img src="img/LSK.png"> LSK</td>
				
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
				<td> <span id='name'>3242342 </span> </td>
			</tr>
	
		
		</tbody>
		</table>
</div>