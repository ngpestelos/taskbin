function() {
  
  var task = $("#task-input").val();
  var project = $("#project-title").text();
  
  var callback = function(doc) {    
    var created_at = $.prettyDate(doc.created_at);
    
    var html = 
      "<li>" +
        "<div class=\"task\">" + task + "</div>" +
        "<div class=\"menu\">" +
          "<em>" + created_at + "</em>" +
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