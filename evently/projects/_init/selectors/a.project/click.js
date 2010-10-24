function() {
  var project = $(this).text();
  $("#project-title").text(project);
  $("#task-list").trigger("fetchTasks", [{"project" : project}]);  
  return false;
}