function() {
  var project = $(this).text();
  $("#task-list").trigger("fetchTasks", [{"project" : project}]);  
  return false;
}