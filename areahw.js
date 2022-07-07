function circle(){
	const rad=document.getElementById('fname').value;
	const areac= 3.14 * parseInt(rad)* parseInt(rad);
	const peri= 2 * 3.14 * parseInt(rad);
	console.log('Area of circle is ' + areac);
	console.log('perimeter of circle is ' + peri);
	
}

function square(){
	var side=document.getElementById('lname').value
	var areas= parseInt(side)* parseInt(side);
	console.log('Area of Square is '+areas)
}

function rectangle(){
	var leng=document.getElementById('len').value;
	var wedh=document.getElementById('wed').value;
	var arear=parseInt(leng)* parseInt(wedh);
	var perir= 2*(parseInt(leng)+ parseInt(wedh));
	console.log('Area of rectangle is ' + arear);
	console.log('perimeter of rectangle is ' + perir);
}