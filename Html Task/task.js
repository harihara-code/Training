function formSubmit() {
	var user_form = document.forms[0];
	var data = "Form Submitted !!\n\n";
	data += 'First Name - ' + user_form.elements["firstname"].value +'\n\n'
			+'Last Name - ' + user_form.elements["lastname"].value +'\n\n'
			+'Address - ' + user_form.elements["address"].value +'\n\n'
			+'Email - ' + user_form.elements["email"].value +'\n\n'
			+'Mobile - ' + user_form.elements["mobileno"].value +'\n\n'
			+'Gender - ' + user_form.elements["gender"].value +'\n\n'
			+'Age - ' + user_form.elements["age"].value +'\n\n' 
			+'Country - ' + user_form.elements["country"].value +'\n\n'
			+'States - ' + user_form.elements["state"].value +'\n\n';
	
	data += 'Selected Courses :\n\n';
	// taking only selected courses
	var courses = document.querySelectorAll('.course');
	for(var i = 0; i < courses.length; i++) {
		if(courses[i].checked) {
			data += '            ' + courses[i].value + '\n\n'; 
		}
	}
	alert(data);	
}

function updateStates() {
	var states = {
			"United_States_Of_America" : "<option>Texas</option><option>California</option><option>Kansas</option><option>Sanfrancisco</option><option>New_Mexico</option>",
			"England" : "<option>Wales</option><option>London</option>",
			"South_Africa" : "<option>Western Cape</option><option>EasternCape</option>",
			"India":"<option>Tamilnadu</option><option>Kerala</option><option>Karnataka</option><option>Telangana</option>",
			"Australia" : "<option>Melbourne</option><option>Sydney</option>"
			
	}
	
	var country = document.getElementById("selectcountry").value;
	document.getElementById("selectstate").innerHTML = states[country];
	
}

function resetform() {
	document.forms[0].reset();
}