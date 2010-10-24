function() {
  
  var task = $("#task-input").val();
  var project = $("#project-title").text();
  
  var callback = function(doc) {    
    var created_at = $.prettyDate(doc.created_at);
    var id = doc._id;
    
    var html = 
      "<li style=\"display: none\">" +
        "<div class=\"task\">" + task + "</div>" +
        "<div class=\"menu\">" +
          "<em>" + created_at + "</em>" +
          "<a class=\"task-done\" task-id=\"" + id + "\" href=\"#\">Done</a>" +
        "</div>" +
      "</li>";
      
    if ($("#task-list > li").length > 0)
      $(html).insertBefore($("#task-list > li:first")).fadeIn('slow');
    else
      $(html).appendTo($("#task-list")).fadeIn('slow');

    $("#task-input").val("");
  };
  
  $.taskbin.createTask(task, project, callback);
}