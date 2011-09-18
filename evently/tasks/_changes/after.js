function() {
  var app = $$(this).app;
  
  console.log("after");
  $(".task").hover(function() {
    $(".options", $(this)).show();
  }, function() {
    $(".options", $(this)).hide();
  });
  
  $("a.done").click(function() {
    var task = $(this).parents(".task"),
        id = task.attr("data-id");
    
    app.db.openDoc(id, {
      success : function(doc) {
        doc['status'] = "closed";
        app.db.saveDoc(doc, {
          success : function() {
            console.log("closed task");
          },
          error : function() {
            alert("Unable to close task");
          }
        });
      },
      error : function() {
        alert("Unable to get task");
      }
    });
    return false;
  });
}