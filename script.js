var count=0;
function colorRev() {
	
	if(count == 0) {
		document.getElementById("switchBoard").style.backgroundColor="grey";
		count++;
		document.getElementById("para").innerHTML ="switch is on";
		document.getElementById("odd").style.backgroundColor="black";
		document.getElementById("even").style.backgroundColor="grey";
		document.getElementById("odd1").style.backgroundColor="black";
		document.getElementById("even1").style.backgroundColor="grey";
		document.getElementById("para1").style.display="none";
		document.getElementById("para").style.display="block";

	}
	
	else {
		document.getElementById("switchBoard").style.backgroundColor="red";
		count =0;
		document.getElementById("para").innerHTML ="switch is off";
		document.getElementById("odd").style.backgroundColor="grey";
		document.getElementById("even").style.backgroundColor="black";
		document.getElementById("odd1").style.backgroundColor="grey";
		document.getElementById("even1").style.backgroundColor="black";
		document.getElementById("para1").style.display="none";
		document.getElementById("para").style.display="block";
	}

}

function capture() {
	var check = document.getElementById("capture").checked;
	console.log(check);
	if(check == true) {
		document.getElementById("btn").style.backgroundColor="green";
		document.getElementById("para").style.display="none";
		document.getElementById("para1").style.display="block";
		document.getElementById("para1").innerHTML ="switch is on hello";
		setTimeout(function(){
			document.getElementById('para1').style.display="none";
		},5000);
	}
	else {
		document.getElementById("btn").style.backgroundColor="yellow";
		document.getElementById("para").style.display="none";
		// document.getElementById("para1").innerHTML ="switch is on hello";
		// document.getElementById("para1").style.display="block";	
		// setTimeout(function(){
		// 	document.getElementById('para1').style.display="none";
		// },5000);
		document.getElementById("para1").style.display="none";

	}
}