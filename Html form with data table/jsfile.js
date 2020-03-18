$(function(){
	//initially hide the form
	$('#formDisplayArea').hide();

	//creating data table
	 $('table#datatable').DataTable({
		columns : [
			{
				title : "First Name"
			},

			{
				title : "Last Name"
			},
			{
				title : "Address Name"
			},
			{
				title : "Email"
			},
			{
				title : "Mobile No"
			},
			{
				title : "Gender"
			},
			{
				title : "Age"
			},
			{
				title : "Country"
			},
			{
				title : "State"
			}	

		]
	});

	 

	$('#addUserButton').on('click', function(){
		$('#formDisplayArea').show();
	});

	$('#submitButton').on('click', function() {
		addUser();
		//addUser work finished no need the form so hiding the form
		$('#formDisplayArea').hide();
		clearForm();
	});

	$('#clearButton').on('click', function(){
		clearForm();
	});


});

function clearForm() {
	$('#userForm').trigger('reset');
}

function updateStates() {
	var states = {
		"United_States_Of_America" : "<option value=\"texas\">Texas</option><option value=\"california\">California</option><option value=\"kansas\">Kansas</option><option value=\"sanfrancisco\">Sanfrancisco</option><option value=\"newmexico\">New_Mexico</option>",
		"England" : "<option value=\"wales\">Wales</option><option value=\"london\">London</option>",
		"South_Africa" : "<option value=\"westerncape\">Western Cape</option><option value=\"easterncape\">EasternCape</option>",
		"India":"<option value=\"tamilnadu\">Tamilnadu</option><option value=\"kerala\">Kerala</option><option value=\"karnataka\">Karnataka</option><option value=\"telangana\">Telangana</option>",
		"Australia" : "<option value=\"melbourne\">Melbourne</option><option value=\"sydney\">Sydney</option>"
	}
	
	var country = $("#selectCountry").val();
	$("#selectState").html(states[country]);
}

function addUser() {
	var form = $('#userForm');
	var userData = [];
	userData.push(form.find('#firstName').val());
	userData.push(form.find('#lastName').val());
	userData.push(form.find('#address').val());
	userData.push(form.find('#email').val());
	userData.push(form.find('#mobileno').val());
	userData.push(form.find('#male').prop('checked') ? 'Male' : 'Female');
	userData.push(form.find('#age').val());
	userData.push(form.find('#selectCountry').val());
	userData.push(form.find('#selectState').val());

	$('#datatable').DataTable().row.add(userData).draw();
}


