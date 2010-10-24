function() {
  //<li id="recent"><a href="#">Recent</a></li>
  //$("#project-list")
  
  //alert($("#project-list > li").length);
  
  //alert($("#project-list > li:first").text());

  /*
  var html = "<li id=\"recent\"><a class=\"project\" project-id=\"recent\" href=\"#\">Recent</a></li>";
  
  if ($("#project-list > li").length > 0) {
    $(html).insertBefore($("#project-list > li:first"));
  }
  */
  
  $("#task-list").trigger("fetchTasks", [{"project" : "Recent"}]);
  
}