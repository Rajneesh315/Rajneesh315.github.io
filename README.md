<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	<title>USELESS</title>
</head>
<body>
	<div class="d">
	<p class="one">Hi!</p>
	<p class="one">HOW ARE YOU??</p>
	<P class="one">HOPE TO BE SAFE.</P>

	<table align="center">
		<tr>

	      <td><button onclick="fun1()" class="btn">WHY YOU MADE THIS CODE ?</button></td>
	      <td><button onclick="fun2()" class="btn">YOU WASTED YOUR TIME</button></td>
		  <td><button onclick="fun3()" class="btn">IS THIS CODE JUST THIS ?</button></td>
		</tr><tr><td><br></td></tr>
		<tr id="tr1">
		  <td><button onclick="fun4()" class="btn">IS THIS CODE USELESS ?</button></td>
		  <td><button onclick="fun5()" class="btn">YOU DIDN'T HAD ANY WORK ?</button></td>
        </tr>
	</table>
	</div>
	<style>
		p.one{
			text-align: center;
			font-size: 2em;
			font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			font-style: italic;
		}

		button.btn{
			font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			font-style: italic;
			font-size: 0.4cm;
			
		}

		div.d{
			padding-bottom:10% ;
			vertical-align: auto;
		}
		#tr1{
			display:none;
		}
	</style>
	<script>
		function fun1() {
			var bruh= document.getElementsByTagName("p");
			for (var x = 0; x < bruh.length; x++) {
				bruh[0].innerHTML = "HMMM...";
				bruh[1].innerHTML = "WHY I MADE THIS CODE ?";
				bruh[2].innerHTML = "I LITERALLY DON'T KNOW!!";	
			}
			}
			
		/*var bruh= document.getElementsByTagName("p");
			for (var x = 0; x < array.length; x++) {
				bruh[x].innerHTML = "hiiii";
				
			}

			
		*/

		function fun2() {
			var bruh = document.getElementsByTagName("p");
for (var x = 0; x < bruh.length; x++) {
              bruh[0].innerHTML = "AAA...";
			  bruh[1].innerHTML = "IT'S NOT COMPLETELY WASTED...";
			  bruh[2].innerHTML = "I USED FUNCTIONS , ARRAY AND MANY MORE THINGS FOR FIRST TIME.";
}
		}

		function fun3() {
			var bruh = document.getElementsByTagName("p");
			for (var a  = 0; a  < bruh.length; a++) {
			   bruh[0].innerHTML="NO!";
			   bruh[1].innerHTML = "IT HAVE MORE ";
			   bruh[2].innerHTML ="\<b>\BUTTONS";
			}
			xyz();
		}

		function xyz() {
			var c = document.getElementById("tr1");
			c.style.display = "block";
			
		}

		function fun4() {
			var bruh= document.getElementsByTagName("p");
			for (var b  = 0; b < bruh.length; b++) {
				bruh[0].innerHTML="YES!";
				bruh[1].innerHTML="IT";
				bruh[2].innerHTML="IS";
			}			
		}
	      	


	</script>
	
</body>
</html>
