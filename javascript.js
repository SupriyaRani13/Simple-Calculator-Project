function cal(clicked_id){
	var value1 = parseFloat(document.getElementById("value1").value);
	var value2 = parseFloat(document.getElementById("value2").value);
	if(isNaN(value1) || isNaN(value2))		//NaN : Not a number
		alert("Enter Valid Input !!!");
	else if(clicked_id=="add")
		document.getElementById("answer").value = value1 + value2;
	else if(clicked_id=="mul")
		document.getElementById("answer").value = value1 * value2;
	else if(clicked_id=="sub")
		document.getElementById("answer").value = value1 - value2;
	else if(clicked_id=="div")
		document.getElementById("answer").value = value1 / value2;
}

function clr(){
	value1.value = " ";
	value2.value = " ";
	answer.value = " ";
}