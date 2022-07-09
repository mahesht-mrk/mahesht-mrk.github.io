function f1(){
	var ab=document.getElementById('t1').value;
	document.getElementById('s1').textContent= 'Result is '+ab;
}

function f2(){
	var x= 'apple';
	x=x+'Banana';
	x=x+'orange';
	document.getElementById('s1').textContent= x;
}

function f3(){
	var a=1;
	a=a+3;
	a=a+1;
	a++;
	a=a+2;
	a=a+' Is my lucky number';
	document.getElementById('s1').textContent= a;
}

function f4(){
	var a=0;
	var t='Mahesh';
	//Which Table you want?
	var c=document.getElementById('t1').value;
	//How many row you want? 
	var d=document.getElementById('t2').value;
	//for uderstanding old loop
	//for(a=1; a<=c; a++){
		//t=t+' <br> '+a+' x  '+ '3'+ '= ' +(a*3);
		
	for(a=1; a<=d; a++){
		t=t+' <br> '+c +' x  '+ a+ '= ' +(c*a);
	}
	document.getElementById('s1').innerHTML= t;
	console.log(t);
	
}