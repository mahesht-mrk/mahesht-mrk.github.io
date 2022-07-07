function hello(){
	console.log('Hello Calculator');
	var ac=document.getElementById('fname').value;
	var bk=document.getElementById('lname').value;
	var dg=document.getElementById('sname').value;
	
	//we use if else statment
	if((ac && bk && dg)== ''){
		document.getElementById('aname').value= "enter all the value";
		
	}else{
		var re = parseInt(ac) * parseInt(bk) * parseInt(dg) /100;
	
	document.getElementById('aname').value= re;
		
	}
	
	
}