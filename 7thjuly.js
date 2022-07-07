function add(){
	console.log('Hello Mirketa');
	var val=document.getElementById('t1').value;
	var pri= 2* parseInt(val);
	console.log('Answer is '+ pri);
}

function clear(){
	document.getElementById('t1').value=" ";
	document.getElementById('t2').value=" ";
}

function doub(){
	var no=document.getElementById('t1').value;
	var pri= 2* no;
	document.getElementById('result').textContent= 'Result is ' +pri;
}