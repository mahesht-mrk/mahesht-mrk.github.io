function fname(){
	console.log('hello mirketa');
}

function hello(){
	var a= document.getElementById('fname').value;
	var b = document.getElementById('lname').value;
	console.log('Good Morning ' + a);
	console.log('welcome to Mirketa ' +b);
}

function testone (){
	var a= document.getElementById('fname').value;
	document.getElementById('lname').value=a;
	
}

function clearf(){
	document.getElementById('fname').value="";
	document.getElementById('lname').value="";
}

function revers(){
	var x=document.getElementById('lname').value;
	var y=document.getElementById('fname').value;
	document.getElementById('fname').value=x;
	document.getElementById('lname').value=y;
	
}

