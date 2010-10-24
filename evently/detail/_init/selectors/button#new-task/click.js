function() {
  
  var task = $("#task-input").val();
  var project = $("#project-title").text();
  
  var callback = function(res, doc) {
    //alert(res.id);
    
    var html = 
      "<li>" +
        "<div class=\"task\">" + task + "</div>" +
        "<div class=\"menu\">" +
          "<em>just now</em>" +
          "<a href=\"#\">Done</a>" +
        "</div>" +
      "</li>";
      
    if ($("#task-list > li").length > 0)
      $(html).insertBefore($("#task-list > li:first"));
    else
      $(html).appendTo($("#task-list"));

    $("#task-input").val("");
  };
  
  $.taskbin.createTask(task, project, callback);
}