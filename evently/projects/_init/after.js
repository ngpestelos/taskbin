function() {  
  $("#project-title").text("Recent");
  $("#task-list").trigger("fetchTasks", [{"project" : "Recent"}]);  
}