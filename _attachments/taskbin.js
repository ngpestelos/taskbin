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
    }    
  });
  
})(jQuery);

$.couch.app(function(app) {
  $("#master").evently("master", app);
  $("#project-list").evently("projects", app);
  
  
  $.taskbin.app = app;
});