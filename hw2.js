function cylinder(){
	var radc=document.getElementById('fname').value;
	var higc=document.getElementById('lname').value;
	var areac= 2* 3.14* parseInt(radc)* parseInt(higc);
	var vol= 2* 3.14* parseInt(radc)* parseInt(radc)* parseInt(higc);
	console.log('Area of Cylinder is ' + areac);
	console.log('Volume of Cylinder is ' + vol);
}

function compound(){
	var rat= document.getElementById('inter').value;
	var tim= document.getElementById('time').value;
	var prin= document.getElementById('princ').value;
	
	var ci= parseInt(prin)*(Math.pow(1+parseInt(rat)/100),parseInt(tim));
	console.log('Compound Intrest is ' + ci );
}