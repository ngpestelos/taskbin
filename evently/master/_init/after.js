function() {
  var createProject = function() {
    var project = $("#name").val();
    $.taskbin.createProject(project, function() {
      $("#name").val("");
      $("#dialog-form").dialog('close');
      $("<li>" + project + "</li>").appendTo("#master ul");
    });
	  return false;
  }
  
  $("#dialog-form").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
			'Create a project': function() {
			  return createProject();
		  }
	  },
	  resizable: false
  });
  
  $("#dialog-form form").submit(function() {
    createProject();
    return false;
  });
}