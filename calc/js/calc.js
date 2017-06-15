var keyval = document.querySelectorAll('.keys span.num');
var screen = document.getElementById('screen');
var clear = document.getElementById('clear');
var elem_dot = document.getElementById('dot');
var elem_eval = document.getElementById('eval');
var elem_step = document.getElementById('clear_step');
keyval.forEach(function(keyItem){
	keyItem.addEventListener("click", function(){
		var keys_elm = keyItem.innerHTML;
		if(screen.innerHTML=="0"){
			screen.innerHTML = keys_elm;
		}		
		else{
			screen.innerHTML += keys_elm;
		}				
	});
});
var elem_oprator = document.querySelectorAll('.keys span.operator');
elem_oprator.forEach(function(elm){
	elm.addEventListener("click", function(){
		var opr_elm = elm.innerHTML;
		var x = screen.innerHTML.slice(-1);
		if(opr_elm=="+"){
			if(opr_elm=="+" && screen.innerHTML==0){
				screen.innerHTML = opr_elm;
				screen.innerHTML = "";
			}
			else if(screen.innerHTML.substring(screen.innerHTML.length-1) == "-" || screen.innerHTML.substring(screen.innerHTML.length-1) == "÷" || screen.innerHTML.substring(screen.innerHTML.length-1) == "x"){				
				screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1);
				screen.innerHTML += opr_elm;
			}
			else if(x != "+"){
				screen.innerHTML += opr_elm;
			}
		}
		if(opr_elm=="-"){
			if(opr_elm=="-" && screen.innerHTML==0){
				screen.innerHTML = opr_elm;
				screen.innerHTML = "";
			}
			else if(screen.innerHTML.substring(screen.innerHTML.length-1) == "+" || screen.innerHTML.substring(screen.innerHTML.length-1) == "÷" || screen.innerHTML.substring(screen.innerHTML.length-1) == "x"){				
				screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1);
				screen.innerHTML += opr_elm;
			}
			else if(x != "-"){
				screen.innerHTML += opr_elm;
			}
		}
		if(opr_elm=="÷"){
			if(opr_elm=="÷" && screen.innerHTML==0){
				screen.innerHTML = opr_elm;
				screen.innerHTML = "";
			}
			else if(screen.innerHTML.substring(screen.innerHTML.length-1) == "+" || screen.innerHTML.substring(screen.innerHTML.length-1) == "-" || screen.innerHTML.substring(screen.innerHTML.length-1) == "x"){				
				screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1);
				screen.innerHTML += opr_elm;
			}
			else if(x != "÷"){
				screen.innerHTML += opr_elm;
			}
		}
		if(opr_elm=="x"){
			if(opr_elm=="x" && screen.innerHTML==0){
				screen.innerHTML = opr_elm;
				screen.innerHTML = "";
			}
			else if(screen.innerHTML.substring(screen.innerHTML.length-1) == "+" || screen.innerHTML.substring(screen.innerHTML.length-1) == "÷" || screen.innerHTML.substring(screen.innerHTML.length-1) == "-"){				
				screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1);
				screen.innerHTML += opr_elm;
			}
			else if(x != "x"){
				screen.innerHTML += opr_elm;
			}
		}
		elem_dot.addEventListener("click", dotHandler);
	});
});

elem_dot.addEventListener("click", dotHandler);
function dotHandler(e) {
    var key_elm= this.innerHTML;
	if(screen.innerHTML.length>0){
		screen.innerHTML += key_elm;
	}
	else{
		screen.innerHTML = key_elm;
	}	
    elem_dot.removeEventListener("click", dotHandler);	
}

clear.addEventListener("click", function(){
	if(screen.innerHTML.length>0){
		screen.innerHTML = "0";
	}
	else{
		screen.innerHTML = "";
	}
	elem_dot.addEventListener("click", dotHandler);
});

elem_eval.addEventListener("click", function(){
	var calc_elm  = screen.innerHTML;	
    var x = calc_elm.replace(/÷/g, "/");
    var y = x.replace(/x/g, "*");
	y = eval(y);
	if(Number.isInteger(y)){		
		screen.innerHTML = y;
	}
	else{		
		screen.innerHTML = y.toFixed(2);
	}	
});
elem_step.addEventListener("click", function(){
	if(screen.innerHTML.substring(screen.innerHTML.length-1) == "."){
		elem_dot.addEventListener("click", dotHandler);
	}
	screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1);
	if(screen.innerHTML.length<1){
		screen.innerHTML = "";
	}	
});






