var s,count=0,check,
animation ={

	settings: {
		switchBoard : document.getElementById("switchBoard"),
		para : document.getElementById("para"),
		odd : document.getElementById("odd"),
		even : document.getElementById("even"),
		odd1 : document.getElementById("odd1"),
		even1 : document.getElementById("even1"),
		btn : document.getElementById("btn"),
		para1 : document.getElementById("odd"),
		check : document.getElementById("capture")

	},

	init : function() {
		s = this.settings;
    this.bindUIActions();
	},

	bindUIActions: function() {
    s.btn.addEventListener("click",function(){
      animation.colorRev();
    });
    s.check.addEventListener("click",function(){
      animation.capture();
    });
  },

  colorRev : function() {
  	if(count == 0) {
  		count++;
  		s.switchBoard.style.backgroundColor="grey";
  		s.para.innerHTML ="switch is on";
  		s.odd.style.backgroundColor="black";
  		s.even.style.backgroundColor="grey";
  		s.odd1.style.backgroundColor="black";
  		s.even1.style.backgroundColor="grey";
  		s.para1.style.display="none";
  		s.para.style.display="block";
  	}
  	else {
  		count=0;	
  		s.switchBoard.style.backgroundColor="red";
  		s.para.innerHTML ="switch is off";
  		s.odd.style.backgroundColor="grey";
  		s.even.style.backgroundColor="black";
  		s.odd1.style.backgroundColor="grey";
  		s.even1.style.backgroundColor="black";
  		s.para1.style.display="none";
  		s.para.style.display="block";
  	}
  },

  capture : function() {
  	s.check.checked;
  	if(check == true) {
  		s.btn.style.backgroundColor="green";
  		s.para.style.display="none";
  		s.para1.innerHTML="switch is on hello";
  		setTimeout(function(){
  			para1.style.display="none";
  		},5000);
  	}
  	else {
  		s.btn.style.backgroundColor="yellow";
  		s.para.style.display="none";
  		s.para1.style.display="none";
  	}
  }
}
animation.init();
