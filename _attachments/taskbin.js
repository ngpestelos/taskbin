(function($) {
  
  $.taskbin = $.taskbin || {}
  
  $.extend($.taskbin, {
        
    createProject : function(p, callback) {
      var newProject = {
        type : "project",
        body : p,
        created_at : new Date()
      };
      
      $.taskbin.app.db.saveDoc(newProject, {
        success : callback,        
        error : function() {
          alert("oops");
        }
      });
    },
    
    createTask : function(t, p, callback) {
      var timestamp = new Date();

      var newTask = {
        type : "task",
        body : t,
        project : p,
        created_at : timestamp,
        updated_at : timestamp
      };
      
      $.taskbin.app.db.saveDoc(newTask, {
        success : function(res) {
          $.taskbin.app.db.openDoc(res.id, {
            success : function(doc) { callback(doc) }
          });
        },
        error : function() {
          alert("oops");
        }
      });
    }
  });
  
})(jQuery);

$.couch.app(function(app) {
  $("#master").evently("master", app);
  $("#project-list").evently("projects", app);
  $("#task-list").evently("tasks", app);
  $("#detail").evently("detail", app);
  
  $.taskbin.app = app;
});