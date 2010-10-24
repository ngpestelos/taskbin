function() {
  $("#detail").delegate("a.task-done", "click", function() {
    var task = $(this);

    //alert(task.attr("task-id"));

    $.taskbin.finishTask(task.attr("task-id"), function() {
      task.parents("li").fadeOut('slow');
    });
  });
}