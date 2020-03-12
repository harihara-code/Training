$(function(){
	var dialog = $("#addnewstudent").dialog({
		autoOpen: false,
		height: 500,
		width: 750,
		modal: true,
		draggable: true,
		
	// form values need to clear other wise value persist in dialog after closing the dialog	
		close : function() {
		     $(this).dialog("close");
		     $(this).find('form')[0].reset();
		},
		buttons: {
			Cancel : function() {
				$(this).dialog("close");
				$(this).find('form')[0].reset();
			},
			"Add": function() {
				var student_name = $('form[name="addstudentform"] #name').val();
				var student_dob = $('form[name="addstudentform"] #dob').val();
				var fathername = $('form[name="addstudentform"] #fathername').val();
				var mothername = $('form[name="addstudentform"] #mothername').val();
				var standard = $('form[name="addstudentform"] #std').val();
				
				
			//adding new student to the student list table
				$('table#studentlist tr:last').after("<tr><td>" + student_name + "</td><td>" + student_dob + "</td><td>" + fathername + "</td><td>" + mothername + "</td><td>" + standard + "</td></tr>");
				
				$(this).dialog("close");
				
			}
			
		}
		
	});
	
	var deletedialog = $('div#deletestudent').dialog({
		autoOpen: false,
		height: 250,
		width: 750,
		modal: true,
		draggable: true,
		close : function() {
		     $(this).dialog("close");
		     $(this).find('form')[0].reset();
		},
		buttons: {
			Cancel : function() {
				$(this).dialog('close');
				$(this).find('form')[0].reset();
			},
			"Delete" : function() {
				var studentfound = false;
				var studentname = $('form[name="deletestudentform"] #deletename').val();
				$('table#studentlist tr').each(function(){
					if(studentfound) {
						return false;
					} else {
						$(this).children().each(function() {
							var data = $(this).html();
							console.log(data);
							if(data == studentname) {
								
								$(this).parent().remove();
								alert('STUDENT FOUND');
								studentfound = true;
								
							};
						// we searching using only with student name [first data]	
							return false;
						});
					}
				});
				
				
				if(!studentfound) {
					
					$(this).find('form')[0].reset();
					
				} else {
					$(this).dialog("close");
					
					console.log('student found student deleted');
					alert("STUDENT DELETED");
				}
			}
		}
	});
	
	$("#add").click(function(){
		dialog.dialog('open');
	});
	
	$('#delete').click(function(){
		deletedialog.dialog('open');
		
	});
	
// used to select date of birth from the calendar		
	$("#dob").datepicker();
	
	$("#standard").selectmenu();
});