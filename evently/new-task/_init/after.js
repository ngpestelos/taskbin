function() {
  var app = $$(this).app,
      textfield = $("#new-task input");
  
  textfield.focus();
  
  $("form").submit(function() {
    var task = textfield.val();
    
    if (!task || task.length == 0) {
      textfield.focus();
      return false;
    }
    
    // Create task document
    app.db.saveDoc({
      "type" : "task",
      "task" : task,
      "created" : new Date().getTime(),
      "status" : "open"
    }, {
      success : function() { textfield.val(""); console.log("ok"); },
      error : function() { alert("Unable to add task"); }
    });

    return false;
  });
}