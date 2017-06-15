var keyval = document.querySelectorAll('.keys span.num');
var screen = document.getElementById('screen');
var clear = document.getElementById('clear');
var elem_eval = document.getElementById('eval');
var elem_zero = document.getElementById('zero');
var elem_dot = document.getElementById('dot');

keyval.forEach(function(keyItem){
	keyItem.addEventListener("click", function(){
		var keys_elm = keyItem.innerHTML;		
		screen.innerHTML += keys_elm;		
	});
});

elem_zero.addEventListener("click", function(){
	var key_elm= this.innerHTML;	
	if(screen.innerHTML=="" || screen.innerHTML==0){		
		screen.innerHTML = key_elm;
	}
	else{		
		screen.innerHTML += key_elm;		
	}	
});

elem_dot.addEventListener("click", clickFunction);
function clickFunction(e) {
    var key_elm= this.innerHTML;
	screen.innerHTML += key_elm;
    elem_dot.removeEventListener("click", clickFunction);
}

clear.addEventListener("click", function(){
	screen.innerHTML = "";
	elem_dot.addEventListener("click", clickFunction);
});

elem_eval.addEventListener("click", function(){
	var x = eval(screen);	
});







