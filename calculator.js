function Add(){
	const a = document.getElementById('firstvalue').value;
	const b = document.getElementById('secondvalue').value;
	const sum = parseInt(a) + parseInt (b);
	console.log('Addition is ' + sum);
}

function Substraction(){
	const a = document.getElementById('firstvalue').value;
	const b= document.getElementById('secondvalue').value;
	const sub= parseInt(a) - parseInt(b);
	console.log('Substraction is ' + sub);
}

function Mul(){
	const a= document.getElementById('firstvalue').value;
	const b= document.getElementById('secondvalue').value;
	const multi= parseInt(a)* parseInt(b);
	console.log('Multiplication is ' + multi);
}

function Div(){
	const a= document.getElementById('firstvalue').value;
	const b= document.getElementById('secondvalue').value;
	const dive= parseInt(a) / parseInt(b);
	console.log('Division is ' + dive);
	
}