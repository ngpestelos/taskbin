function() {
  var widget = $(this);
  //console.log("tag after");
  
  /*
  $(".tag a").click(function() {
    var a = $(this),
        tag = a.text();
    widget.trigger("tasks", [tag]);
    return false;
  });
  */
  
  /*
  $(".tag a").click(function() {
    widget.trigger("tagged-tasks");
  });
  */
  
  $(".tag a").click(function() {
    var a = $(this),
        tag = a.text();
    
    $("#tasks").trigger("_changes", [tag]);
    return false;
  });
}