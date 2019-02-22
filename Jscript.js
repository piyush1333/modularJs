var count=0;
alert("ok");
(function( $ ){
   $.fn.colorRev = function() {

   	if(count == 0) {
   		count++;
			$("#switchBoard").css("background","grey");
			$("#para").html("switch is on");
			$("#odd").css("background","black");
			$("#even").css("background","grey");
			$("#odd1").css("background","black");
			$("#even1").css("background","grey");
			$("#para1").css("display","none");
			$("#para").css("display","block");
   	}
   	else {
   		count=0;
   		$("#switchBoard").css("background","red");
   		$("#para").html("switch is off");
   		$("#odd").css("background","grey");
   		$("#even").css("background","black");
   		$("#odd1").css("background","grey");
   		$("#even1").css("background","black");
   		$("#para1").css("display","none");
   		$("#para").css("display","block");


   	}

   }

   (function( $ ){
   $.fn.capture = function() {
   		check = $("capture").checked;
   		console.log(check);
   		if(check == true)
   		{
   			$("#btn").css("background","green");
   			$("#para").css("display","none");
   			$("#para1").css("display","block");
   			$("para1").html("switch is on");
   			setTimeout(function(){
					$("#para1").css("display","none");
				},5000);
   		}
   		else {
   			$("#btn").css("background","yellow");
   			$("#para").css("display","none");
   			$("#para1").css("display","none");
   		}

   }